// Is this a post order DFS?
export const flatten = (array: unknown[]): unknown[] => {
  // If it is a leaf
  if (!Array.isArray(array)) {
    // recursion base case
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

export const flattenIter = <T>(stack: T[]): T[] => {
  const result = []
  let item: T

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
