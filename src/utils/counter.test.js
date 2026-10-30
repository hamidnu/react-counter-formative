import { describe, expect, it } from 'vitest';
import { decrementCount, incrementCount, MAX_COUNT, MIN_COUNT } from './counter';

describe('counter utilities', () => {
  it('increments the count by one', () => {
    expect(incrementCount(0)).toBe(1);
  });

  it('does not increment above the maximum', () => {
    expect(incrementCount(MAX_COUNT)).toBe(MAX_COUNT);
  });

  it('decrements the count by one', () => {
    expect(decrementCount(1)).toBe(0);
  });

  it('does not decrement below the minimum', () => {
    expect(decrementCount(MIN_COUNT)).toBe(MIN_COUNT);
  });
});
