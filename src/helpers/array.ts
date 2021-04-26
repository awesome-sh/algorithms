// Complexity: O(n)
export const clone = <T>(array: T[]): T[] => array.slice()

export const leftRotation = <T>(array: T[], n: number): T[] => {
  // Prevent unnecessary rotations
  n = n % array.length
  return array.slice(n, array.length).concat(array.slice(0, n))
}

// One liner: [array[i], array[j]] = [array[j], array[i]];
// Complexity: O(1)
export const swap = <T>(array: T[], i: number, j: number): void => {
  const tmp = array[i]
  array[i] = array[j]
  array[j] = tmp
}

// Good for reversing a string
// Complexity: O(n)
export const reverse = <T>(array: T[]): T[] => {
  let i = 0
  let j = array.length - 1

  while (i < j) {
    swap(array, i, j)
    i++
    j--
  }

  return array
}

// TODO: use heaps
export const ranking = (array: number[]): number[] => {
  const cloned = clone(array)
  const sorted = cloned.sort((a, b) => b - a)

  // For each item, place the ranking position
  return array.map((v) => sorted.indexOf(v) + 1)
}

export const matrix = (rows: number, cols: number): number[][] =>
  Array(rows).fill(Array(cols))
