import { swap } from '../helpers/array'

export const bubbleSort = (array: number[]): void => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1)
      }
    }
  }
}

export const betterBubbleSort = (array: number[]): void => {
  let swapped: boolean

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
