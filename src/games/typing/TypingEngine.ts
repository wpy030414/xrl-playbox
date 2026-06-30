import type { TypingPassage } from "./passages";

export type TypingStatus = "ready" | "playing" | "finished" | "dead";

export type TypingDifficulty = "easy" | "normal" | "hard" | "expert" | "master";

export const DIFFICULTY_BASELINE_WPM: Record<TypingDifficulty, number> = {
  easy: 10,
  normal: 20,
  hard: 30,
  expert: 40,
  master: 50,
};

export interface CharState {
  char: string;
  status: "pending" | "correct" | "incorrect";
}

export interface TypingStats {
  correctChars: number;
  incorrectChars: number;
  correctWords: number;
  wrongWords: number;
  wpm: number;
  averageWpm: number;
  accuracy: number;
  health: number;
  elapsedMs: number;
}

export interface WordBurst {
  timestamp: number;
  wordIndex: number;
}

const GRACE_PERIOD_MS = 30_000;
const HEALTH_DAMAGE_BELOW_BASELINE = 2; // per second
const HEALTH_REGEN_ABOVE_BASELINE = 1; // per second
const MAX_HEALTH = 100;

export function normalizeTypingText(text: string): string {
  return text
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/—/g, "--")
    .replace(/–/g, "-")
    .replace(/…/g, "...")
    .replace(/\s+/g, " ")
    .trim();
}

export class TypingEngine {
  passage: TypingPassage;
  text: string;
  chars: CharState[];
  cursor = 0;
  status: TypingStatus = "ready";
  startTime: number | null = null;
  endTime: number | null = null;
  health = MAX_HEALTH;

  correctChars = 0;
  incorrectChars = 0;

  // Word-level tracking (words are split by whitespace)
  wordBoundaries: number[] = [];
  wordHasError: boolean[] = [];
  correctWords = 0;
  wrongWords = 0;
  wordBursts: WordBurst[] = [];

  lastHealthTickAt: number | null = null;
  everBelowBaseline = false;
  baselineWpm: number;

  constructor(passage: TypingPassage, baselineWpm: number) {
    this.passage = passage;
    this.text = normalizeTypingText(passage.text);
    this.baselineWpm = baselineWpm;
    this.chars = this.text.split("").map((char) => ({ char, status: "pending" }));
    this.computeWordBoundaries();
  }

  private computeWordBoundaries() {
    // wordBoundaries[i] = index of the last char of word i (usually a space or last char)
    this.wordBoundaries = [];
    let inWord = false;
    for (let i = 0; i < this.text.length; i++) {
      const isSpace = this.text[i] === " ";
      if (!isSpace && !inWord) {
        inWord = true;
      }
      if (isSpace && inWord) {
        this.wordBoundaries.push(i - 1);
        inWord = false;
      }
    }
    if (inWord) {
      this.wordBoundaries.push(this.text.length - 1);
    }
    this.wordHasError = new Array(this.wordBoundaries.length).fill(false);
  }

  start(now: number) {
    if (this.status !== "ready") return;
    this.status = "playing";
    this.startTime = now;
    this.lastHealthTickAt = now;
  }

  private currentWordIndex(): number {
    // Find which word the cursor is currently in
    for (let i = 0; i < this.wordBoundaries.length; i++) {
      if (this.cursor <= this.wordBoundaries[i]) return i;
    }
    return this.wordBoundaries.length - 1;
  }

  private completeWordIfNeeded(wordIndex: number, now: number) {
    if (wordIndex >= this.wordBoundaries.length) return;
    const lastCharIndex = this.wordBoundaries[wordIndex];
    if (this.cursor <= lastCharIndex) return;

    // Word already counted? Prevent double counting.
    const counted = this.correctWords + this.wrongWords > wordIndex;
    if (counted) return;

    const hadError = this.wordHasError[wordIndex];
    if (hadError) {
      this.wrongWords++;
    } else {
      this.correctWords++;
      this.wordBursts.push({ timestamp: now, wordIndex });
    }
  }

  input(char: string, now: number): boolean {
    if (this.status !== "playing") {
      if (this.status === "ready") this.start(now);
      else return false;
    }

    if (this.cursor >= this.text.length) return false;

    const expected = this.text[this.cursor];
    const isCorrect = char === expected;
    const state = this.chars[this.cursor];

    if (isCorrect) {
      state.status = "correct";
      this.correctChars++;
    } else {
      state.status = "incorrect";
      this.incorrectChars++;
      const wordIdx = this.currentWordIndex();
      if (wordIdx < this.wordHasError.length) {
        this.wordHasError[wordIdx] = true;
      }
    }

    this.cursor++;

    const wordIdx = this.currentWordIndex();
    this.completeWordIfNeeded(wordIdx - 1, now);

    if (this.cursor >= this.text.length) {
      this.completeWordIfNeeded(this.wordBoundaries.length - 1, now);
      this.finish(now);
    }

    return isCorrect;
  }

  backspace(): boolean {
    if (this.status !== "playing") return false;
    if (this.cursor <= 0) return false;

    const prevIndex = this.cursor - 1;
    const state = this.chars[prevIndex];
    if (state.status === "correct") {
      // Do not allow undoing correct characters.
      return false;
    }

    if (state.status === "incorrect") {
      this.incorrectChars--;
    }
    state.status = "pending";
    this.cursor = prevIndex;
    return true;
  }

  tick(now: number) {
    if (this.status !== "playing") return;
    if (!this.startTime || !this.lastHealthTickAt) return;

    const elapsed = now - this.startTime;
    if (elapsed < GRACE_PERIOD_MS) {
      this.lastHealthTickAt = now;
      return;
    }

    const dtSeconds = (now - this.lastHealthTickAt) / 1000;
    if (dtSeconds < 1) return;

    const avgWpm = this.getAverageWpm(now);
    if (avgWpm < this.baselineWpm) {
      this.everBelowBaseline = true;
      this.health = Math.max(0, this.health - HEALTH_DAMAGE_BELOW_BASELINE * dtSeconds);
    } else {
      this.health = Math.min(MAX_HEALTH, this.health + HEALTH_REGEN_ABOVE_BASELINE * dtSeconds);
    }

    this.lastHealthTickAt = now;

    if (this.health <= 0) {
      this.health = 0;
      this.status = "dead";
      this.endTime = now;
    }
  }

  finish(now: number) {
    if (this.status !== "playing") return;
    this.status = "finished";
    this.endTime = now;
  }

  getWpm(now: number): number {
    if (!this.startTime) return 0;
    const minutes = (now - this.startTime) / 60_000;
    if (minutes <= 0) return 0;
    return Math.round((this.correctChars / 5) / minutes);
  }

  getAverageWpm(now: number): number {
    return this.getWpm(now);
  }

  getAccuracy(): number {
    const total = this.correctChars + this.incorrectChars;
    if (total === 0) return 100;
    return Math.round((this.correctChars / total) * 100);
  }

  getStats(now: number): TypingStats {
    return {
      correctChars: this.correctChars,
      incorrectChars: this.incorrectChars,
      correctWords: this.correctWords,
      wrongWords: this.wrongWords,
      wpm: this.getWpm(now),
      averageWpm: this.getAverageWpm(now),
      accuracy: this.getAccuracy(),
      health: Math.round(this.health),
      elapsedMs: this.startTime ? now - this.startTime : 0,
    };
  }

  wordsTyped(): number {
    return this.correctWords + this.wrongWords;
  }

  errorRate(): number {
    const total = this.correctWords + this.wrongWords;
    if (total === 0) return 0;
    return this.wrongWords / total;
  }

  hasTwentyCorrectWordsInTenSeconds(): boolean {
    // More than 20 correct words completed within any 10-second window.
    const windowMs = 10_000;
    const threshold = 20;
    for (let i = 0; i < this.wordBursts.length; i++) {
      const end = this.wordBursts[i].timestamp;
      const start = end - windowMs;
      let count = 0;
      for (let j = i; j >= 0; j--) {
        if (this.wordBursts[j].timestamp >= start) count++;
        else break;
      }
      if (count > threshold) return true;
    }
    return false;
  }
}
