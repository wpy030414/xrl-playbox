import { describe, it, expect } from 'vitest';
import { generateLevel, calculateDifficulty } from './SokobanGenerator';
import { mulberry32 } from '@/utils/random';

describe('Sokoban generation performance', () => {
  it('generates levels 1-12 within budget', () => {
    const results: { level: number; size: number; boxCount: number; ms: number }[] = [];
    for (let level = 1; level <= 12; level++) {
      const diff = calculateDifficulty(level);
      const rng = mulberry32(123456789 + level * 0x9e3779b9);
      const start = performance.now();
      const lvl = generateLevel(level, rng);
      const ms = performance.now() - start;
      results.push({ level, size: diff.size, boxCount: diff.boxCount, ms });
      expect(lvl.size).toBe(diff.size);
      expect(lvl.boxes.length).toBe(diff.boxCount);
      expect(ms).toBeLessThan(5000);
    }
    console.table(results);
  });
});
