export type Rng = () => number;

/**
 * Mulberry32: a simple, fast, seeded 32-bit PRNG.
 * Produces values in [0, 1).
 */
export function mulberry32(seed: number): Rng {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function randomSeed(): number {
  if (typeof crypto !== "undefined" && crypto.getRandomValues) {
    const buf = new Uint32Array(1);
    crypto.getRandomValues(buf);
    return buf[0];
  }
  return (Date.now() & 0xffffffff) ^ Math.floor(Math.random() * 0x100000000);
}

const IDLE_POLYFILL_TIMEOUT = 16;

export function requestIdleCallbackPolyfill(callback: IdleRequestCallback): number {
  if (typeof requestIdleCallback === "function") {
    return requestIdleCallback(callback);
  }
  return window.setTimeout(() => {
    callback({ timeRemaining: () => IDLE_POLYFILL_TIMEOUT, didTimeout: true } as IdleDeadline);
  }, 1);
}

export function cancelIdleCallbackPolyfill(id: number): void {
  if (typeof cancelIdleCallback === "function") {
    cancelIdleCallback(id);
  } else {
    clearTimeout(id);
  }
}
