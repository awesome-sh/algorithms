export const fill = <T>(size: number, value: T): T[] =>
  new Array(size).fill(value)

export const clone = <T>(array: T[]): T[] => array.slice()

export const leftRotation = <T>(array: T[], n: number): T[] => {
  // Prevent unnecessary rotations
  n = n % array.length
  return array.slice(n, array.length).concat(array.slice(0, n))
}

export const swap = <T>(array: T[], i: number, j: number): void => {
  const tmp = array[i]
  array[i] = array[j]
  array[j] = tmp
}

// Good for reversing a string
export const reverse = <T>(array: T[]): T[] => {
  for (let i = 0, j = array.length - 1; i < j; i++, j--) {
    swap(array, i, j)
  }

  return array
}

export const ranking = (array: number[]): number[] => {
  const cloned = clone(array)
  const sorted = cloned.sort((a, b) => b - a)

  // For each item, place the ranking position
  return array.map((v) => sorted.indexOf(v) + 1)
}

export const matrix = (rows: number, cols: number): number[][] =>
  Array(rows).fill(Array(cols))

export const counter = (str: string): Record<string, number> => {
  const counter = {}

  for (let i = 0; i < str.length; i++) {
    counter[str[i]] = 0
  }

  return counter
}
