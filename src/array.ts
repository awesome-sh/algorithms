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
  // Clones and sorts in ascending order
  const cloned = clone(array)
  const sorted = cloned.sort((a, b) => b - a)

  // For each item, place the ranking position
  return array.map((v) => sorted.indexOf(v) + 1)
}

// Is this a post order DFS?
export function flatten (array: any[]): any[] {
  // If it is a leaf
  if (!Array.isArray(array)) { // recursion base case
    // Return flat array to parent
    return [array]
  }

  let memo = []

  // For each child, from left to right
  for (let i = 0; i < array.length; i++) {
    memo = memo.concat(flatten(array[i]))
  }

  // Return flat array to parent
  return memo
}

export function flattenIter (stack: any[]): any[] {
  const result = []
  let item: any

  while (stack.length) {
    // Altera o array original
    item = stack.shift()

    if (Array.isArray(item)) {
      stack.unshift(...item)
    } else {
      result.push(item)
    }
  }

  return result
}

// http://blog.benoitvallon.com/tips/flattening-arrays-in-javascript/
// http://amanvirk.me/flatten-an-array-without-recursion/
