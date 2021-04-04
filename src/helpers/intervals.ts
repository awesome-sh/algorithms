export const isOverlap = (
  a: [number, number],
  b: [number, number]
): boolean => {
  return a[0] < b[1] && b[0] < a[1]
}

export const mergeOverlappingIntervals = (
  a: [number, number],
  b: [number, number]
): [number, number] => {
  return [Math.min(a[0], b[0]), Math.max(a[1], b[1])]
}
