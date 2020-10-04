const memo = {}

const knapsackRecursive = (
  profits: number[],
  weights: number[],
  capacity: number,
  index: number
): number => {
  const key = capacity + '-' + index

  if (memo[key]) {
    return memo[key]
  }

  if (capacity == 0 || index == 0) {
    return 0
  }

  // If the weight of the element at index exceeds the capacity, we shouldn't process this
  if (weights[index] > capacity) {
    // Recursive call after excluding the element at the index
    memo[key] = knapsackRecursive(profits, weights, capacity, index - 1)
  } else {
    // Recursive call after choosing the element at the index
    const profit1 =
      profits[index] +
      knapsackRecursive(profits, weights, capacity - weights[index], index - 1)

    // Recursive call after excluding the element at the index
    const profit2 = knapsackRecursive(profits, weights, capacity, index - 1)

    memo[key] = Math.max(profit1, profit2)
  }

  return memo[key]
}

export const knapsack = (
  profits: number[],
  weights: number[],
  capacity: number
): number => {
  const lastIndex = profits.length - 1
  return knapsackRecursive(profits, weights, capacity, lastIndex)
}
