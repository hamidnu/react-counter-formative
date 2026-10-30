export const MIN_COUNT = 0;
export const MAX_COUNT = 10;

export function incrementCount(currentCount) {
  return Math.min(currentCount + 1, MAX_COUNT);
}

export function decrementCount(currentCount) {
  return Math.max(currentCount - 1, MIN_COUNT);
}