export const subsets = (nums: number[]): number[][] => {
  const result = []
  const memo = new Set<number>()
  subsetsBacktrack(nums, 0, result, memo)
  return result
}

const subsetsBacktrack = (
  nums: number[],
  start: number,
  result: number[][],
  memo: Set<number>
) => {
  const curr = []
  memo.forEach((i) => curr.push(nums[i]))
  result.push(curr)

  for (let i = start; i < nums.length; i++) {
    memo.add(i)
    subsetsBacktrack(nums, i + 1, result, memo)
    memo.delete(i)
  }
}

export const permute = (
  nums: number[],
  k: number = nums.length
): number[][] => {
  const result = []
  const memo = new Set<number>()
  permuteBacktrack(nums, k, 0, result, memo)
  return result
}

const permuteBacktrack = (
  nums: number[],
  k: number,
  start: number,
  result: number[][],
  memo: Set<number>
) => {
  if (memo.size === k) {
    const curr = []
    memo.forEach((i) => curr.push(nums[i]))
    result.push(curr)
  } else {
    for (let i = start; i < nums.length; i++) {
      if (!memo.has(i)) {
        memo.add(i)
        permuteBacktrack(nums, k, start, result, memo)
        memo.delete(i)
      }
    }
  }
}

// const permutations = permute([1, 2, 2], 2)
// console.log('Permutations:')
// console.log(permutations)
// console.log(permutations.length)

// Como lidar com duplicates?
export const combine = (
  nums: number[],
  k: number = nums.length
): number[][] => {
  const result = []
  const memo = new Set<number>()
  combineBacktrack(nums, k, 0, result, memo)
  return result
}

const combineBacktrack = (
  nums: number[],
  k: number,
  start: number,
  result: number[][],
  memo: Set<number>
) => {
  if (memo.size === k) {
    const curr = []
    memo.forEach((i) => curr.push(nums[i]))
    result.push(curr)
  } else {
    for (let i = start; i < nums.length; i++) {
      memo.add(i)
      combineBacktrack(nums, k, i + 1, result, memo)
      memo.delete(i)
    }
  }
}

// const combinations = combine([1, 2, 3, 4], 2)
// console.log('combinations:')
// console.log(combinations)
// console.log(combinations.length)

// const permute = (nums) => {
//   const res = []

//   backtrack(nums, 0, res)

//   return res
// };

// const backtrack = (nums, pos, res) => {
//   if (pos === nums.length) {
//     res.push([...nums]);
//   } else {
//     for (let i = pos; i < nums.length; i++) {
//       swap(nums, pos, i);
//       backtrack(nums, pos+1, res)
//       swap(nums, i, pos);
//     }
//   }
// }

// console.log(permute([1, 2, 2, 3]));
