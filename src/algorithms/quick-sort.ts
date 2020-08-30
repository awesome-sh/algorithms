import { swap } from '../helpers/array'

export function quickSort (array: any[], low = 0, high: number = array.length - 1): void {
  if (low < high) {
    const index = partition(array, low, high)
    quickSort(array, low, index - 1)
    quickSort(array, index, high)
  }
}

export function partition (array: any[], low: number, high: number): number {
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

// function quickSort2 (array, low = 0, high = array.length - 1) {
//   if (low < high) {
//     const index = partition2(array, low, high)
//     quickSort2(array, low, index - 1)
//     quickSort2(array, index + 1, high)
//   }
// }

// function partition2 (array, low, high) {
//   const pivot = array[high]
//   let i = low - 1

//   for (let j = low; j < high; j++) {
//     if (array[j] <= pivot) {
//       i++
//       swap(array, i, j)
//     }
//   }
//   i++
//   swap(array, i, high)
//   return i
// }
