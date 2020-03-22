function mergeSort (array) {
  if (array.length === 1) {
    return array
  }

  const mid = Math.floor(array.length / 2)
  const left = array.slice(0, mid)
  const right = array.slice(mid, array.length)

  return merge(mergeSort(left), mergeSort(right))
}

function merge (L, R) {
  const result = []
  let l = 0
  let r = 0

  while (l < L.length && r < R.length) {
    if (L[l] < R[r]) {
      result.push(L[l++])
    } else {
      result.push(R[r++])
    }
  }

  while (l < L.length) {
    result.push(L[l++])
  }

  while (r < R.length) {
    result.push(R[r++])
  }

  return result
}

module.exports = {
  mergeSort
}
