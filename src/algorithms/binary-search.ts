export const binarySearch = (array: number[], x: number): number => {
  let low = 0
  let high = array.length - 1

  while (low <= high) {
    /**
     * This line used to be "const mid = Math.floor((low + high) / 2)" but
     * it was changed due to a bug explained here: https://bit.ly/3aZ2zyl
     */
    const mid = low + Math.floor((high - low) / 2)

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
