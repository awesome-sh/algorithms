/**
  Determine if there's an overlap between two intervals:
  First let's think in the opposite direction, how would the intervals look like if they do NOT overlap?

  End time of the first interval has to be earlier than the start time of the second interval.

  x1  x2
  |---|
          |----|
          y1  y2
          
  y1  y2
  |---|
          |----|
          x1  x2
  i.e. (x2 < y1 or y2 < x1)

  So the overlapping condition is the opposite: not (x2 < y1 or y2 < x1)
*/
export const isOverlap = (
  a: [number, number],
  b: [number, number]
): boolean => {
  return !(b[1] < a[0] || a[1] < b[0])
}

/**
  If we want to go one-step further, we can reduce it by DeMorgan's Law: (Not (A or B) == Not A and Not B), this is equivalent to:
  * not (x2 < y1 or y2 < x1)
  * -> not (x2 < y1) and not (y2 < x1) (applied DeMorgan's Law)
  * -> x2 >= y1 and y2 >= x1 (inverted operators)
  * -> x1 <= y2 and y1 <= x2 (rearranged operands)
 */
export const isOverlap2 = (
  a: [number, number],
  b: [number, number]
): boolean => {
  return a[0] <= b[1] && b[0] <= a[1]
}

export const mergeOverlappingIntervals = (
  a: [number, number],
  b: [number, number]
): [number, number] => {
  return [Math.min(a[0], b[0]), Math.max(a[1], b[1])]
}
