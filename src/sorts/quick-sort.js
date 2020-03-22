const { swap } = require('../array')

function partition (array, low, high) {
  const pivotIndex = Math.floor((low + high) / 2)
  const pivot = array[pivotIndex]
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

function quickSort (array, low = 0, high = array.length - 1) {
  let index

  if (array.length > 1) {
    index = partition(array, low, high)

    if (low < index - 1) {
      quickSort(array, low, index - 1)
    }

    if (index < high) {
      quickSort(array, index, high)
    }
  }
}

module.exports = {
  quickSort
}
