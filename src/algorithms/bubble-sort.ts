import { swap } from '../array'

export function bubbleSort (array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1)
      }
    }
  }
}

export function betterBubbleSort (array) {
  let swapped

  do {
    swapped = false
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1)
        swapped = true
      }
    }
  } while (swapped)
}
