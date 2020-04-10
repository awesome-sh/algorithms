import { swap } from '../utils'

export function bubbleSort (array: any[]): void {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1)
      }
    }
  }
}

export function betterBubbleSort (array: any[]): void {
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
