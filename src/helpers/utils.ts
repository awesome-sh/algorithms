/**
 * Numbers
 */

export function truncate (num: number): number {
  return num | 0
}

export function pop (num: number): [number, number] {
  const digit = num % 10
  num = (num / 10) | 0
  return [num, digit]
}

export function push (num: number, digit: number): number {
  return num * 10 + digit
}

export function numberOfDigits (number: number): number {
  let counter = 0

  do {
    [number] = pop(number)
    counter++
  } while (number)

  return counter
}

export function mark (number: number): number {
  if (number < 0) {
    return number
  }
  return number * -1
}

export function unmark (number: number): number {
  if (number < 0) {
    return number * -1
  }
  return number
}

/**
 * Arrays
 */

export function fill (size: number, value: any): any[] {
  return new Array(size).fill(value)
}

export function clone (array: any[]): any[] {
  return array.slice()
}

export function leftRotation (array: any[], n: number): any[] {
  // Prevent unnecessary rotations
  n = n % array.length
  return array.slice(n, array.length).concat(array.slice(0, n))
}

export function swap (array: any[], i: number, j: number): void {
  const tmp = array[i]
  array[i] = array[j]
  array[j] = tmp
}

// Good for reversing a string
export function reverse (array: any[]): any[] {
  for (let i = 0, j = array.length - 1; i < j; i++, j--) {
    swap(array, i, j)
  }

  return array
}

export function ranking (array: any[]): any[] {
  const cloned = clone(array)
  const sorted = cloned.sort((a, b) => b - a)

  // For each item, place the ranking position
  return array.map((v) => sorted.indexOf(v) + 1)
}

export function matrix (rows: number, cols: number) {
  return Array(rows).fill(Array(cols))
}
