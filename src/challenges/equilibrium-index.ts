export function equilibriumIndex (array: number[]): number {
  let sum = 0
  let leftsum = 0

  for (let i = 0; i < array.length; ++i) {
    sum += array[i]
  }

  for (let i = 0; i < array.length; ++i) {
    sum -= array[i]

    if (leftsum === sum) {
      return i
    }

    leftsum += array[i]
  }

  /* If no equilibrium index found, then return 0 */
  return -1
}