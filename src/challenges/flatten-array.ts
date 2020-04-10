
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