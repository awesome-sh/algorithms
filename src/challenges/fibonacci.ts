const memo = {}

export const fibonacci = (n: number): number => {
  if (n <= 1) {
    return 1
  }

  if (!memo[n]) {
    memo[n] = fibonacci(n - 1) + fibonacci(n - 2)
  }

  return memo[n]
}
