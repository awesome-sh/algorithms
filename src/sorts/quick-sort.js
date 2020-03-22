const { swap } = require('../array')

function quickSort (array, low = 0, high = array.length - 1) {
  if (low < high) {
    const index = partition(array, low, high)
    quickSort(array, low, index - 1)
    quickSort(array, index, high)
  }
}

function partition (array, low, high) {
  const mid = Math.floor((low + high) / 2)
  const pivot = array[mid]
  let i = low
  let j = high

  while (i <= j) {
    while (array[i] < pivot) {
      i++
    }

    while (array[j] > pivot) {
      j--
    }

    if (i <= j) {
      swap(array, i, j)
      i++
      j--
    }
  }

  return i
}

module.exports = {
  quickSort
}
