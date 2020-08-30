export function binarySearch(array: any[], x: unknown): number {
  let low = 0
  let high = array.length - 1

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)

    if (array[mid] === x) {
      return mid
    } else if (array[mid] < x) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }

  return -1
}
