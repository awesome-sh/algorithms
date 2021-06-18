// Leetcode 136 (https://leetcode.com/problems/single-number/)
export const findSingle = (arr: number[]): number => {
  let result = 0

  for (const i of arr) {
    result ^= i // XOR acaba funcionando como "undo". Ex: 9 XOR 9 = 0
  }

  return result
}
