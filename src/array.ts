export function fill (size, value) {
  return new Array(size).fill(value)
}

export function binarySearch (array, x) {
  let low = 0
  let high = array.length - 1

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)

    if (array[mid] === x) {
      return mid
    } else if (array[mid] < x) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }

  return -1
}

export function clone (array) {
  return array.slice()
}

export function equilibriumIndex (array) {
  let sum = 0
  let leftsum = 0

  for (let i = 0; i < array.length; ++i) {
    sum += array[i]
  }

  for (let i = 0; i < array.length; ++i) {
    sum -= array[i]

    if (leftsum === sum) {
      return i
    }

    leftsum += array[i]
  }

  /* If no equilibrium index found, then return 0 */
  return -1
}

export function leftRotation (array, n) {
  // Prevent unnecessary rotations
  n = n % array.length
  return array.slice(n, array.length).concat(array.slice(0, n))
}

export function swap (array, i, j) {
  const tmp = array[i]
  array[i] = array[j]
  array[j] = tmp
}

// Good for reversing a string
export function reverse (array) {
  for (let i = 0, j = array.length - 1; i < j; i++, j--) {
    swap(array, i, j)
  }

  return array
}

export function ranking (array) {
  // Clones and sorts in ascending order
  const cloned = clone(array)
  const sorted = cloned.sort((a, b) => b - a)

  // For each item, place the ranking position
  return array.map((v) => sorted.indexOf(v) + 1)
}

// Is this a post order DFS?
export function flatten (array) {
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

export function flattenIter (stack) {
  const result = []
  let item

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
