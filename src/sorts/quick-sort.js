const { swap } = require('../array')

function partition (items, left, right) {
  var pivot = items[Math.floor((right + left) / 2)]
  var i = left
  var j = right

  while (i <= j) {
    while (items[i] < pivot) {
      i++
    }

    while (items[j] > pivot) {
      j--
    }

    if (i <= j) {
      swap(items, i, j)
      i++
      j--
    }
  }
  return i
}

function quickSort (items, left, right) {
  let index

  if (items.length > 1) {
    index = partition(items, left, right)

    if (left < index - 1) {
      quickSort(items, left, index - 1)
    }

    if (index < right) {
      quickSort(items, index, right)
    }
  }

  return items
}

const items = [5, 3, 7, 6, 2, 9]
const sortedArray = quickSort(items, 0, items.length - 1)
console.log(sortedArray)
