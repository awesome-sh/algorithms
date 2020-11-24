import HashSet from '../data-structure/hashset'
import { swap } from '../helpers/array'

export const subsets = (nums: number[]): number[][] => {
  const result = []
  const memo = new HashSet<number>()
  subsetsBacktrack(nums, 0, result, memo)
  return result
}

const subsetsBacktrack = (
  nums: number[],
  start: number,
  result: number[][],
  memo: HashSet<number>
) => {
  const curr = []
  memo.forEach((i) => curr.push(nums[i]))
  result.push(curr)

  for (let i = start; i < nums.length; i++) {
    memo.add(i)
    subsetsBacktrack(nums, i + 1, result, memo)
    memo.remove(i)
  }
}

export const permute = (
  nums: number[],
  k: number = nums.length
): number[][] => {
  const result = []
  const memo = new HashSet<number>()
  permuteBacktrack(nums, k, 0, result, memo)
  return result
}

const permuteBacktrack = (
  nums: number[],
  k: number,
  start: number,
  result: number[][],
  memo: HashSet<number>
) => {
  if (memo.size() === k) {
    const curr = []
    memo.forEach((i) => curr.push(nums[i]))
    result.push(curr)
  } else {
    for (let i = start; i < nums.length; i++) {
      if (!memo.has(i)) {
        memo.add(i)
        permuteBacktrack(nums, k, start, result, memo)
        memo.remove(i)
      }
    }
  }
}

const permutations = permute([1, 2, 2])
console.log('Permutations:')
console.log(permutations)
console.log(permutations.length)

export const permuteInPlace = (
  nums: number[],
  k: number = nums.length
): number[][] => {
  const result = []
  permuteInPlaceBacktrack(nums, k, 0, result)
  return result
}

const permuteInPlaceBacktrack = (
  nums: number[],
  k: number,
  start: number,
  result: number[][]
) => {
  if (start === k) {
    result.push([...nums])
  } else {
    for (let i = start; i < nums.length; i++) {
      swap(nums, start, i)
      permuteInPlaceBacktrack(nums, k, start + 1, result)
      swap(nums, i, start)
    }
  }
}

const permutations2 = permuteInPlace([1, 2, 3], 2)
console.log('Permutations:')
console.log(permutations2)
console.log(permutations2.length)

// Como lidar com duplicates?
export const combine = (
  nums: number[],
  k: number = nums.length
): number[][] => {
  const result = []
  const memo = new HashSet<number>()
  combineBacktrack(nums, k, 0, result, memo)
  return result
}

const combineBacktrack = (
  nums: number[],
  k: number,
  start: number,
  result: number[][],
  memo: HashSet<number>
) => {
  if (memo.size() === k) {
    const curr = []
    memo.forEach((i) => curr.push(nums[i]))
    result.push(curr)
  } else {
    for (let i = start; i < nums.length; i++) {
      memo.add(i)
      combineBacktrack(nums, k, i + 1, result, memo)
      memo.remove(i)
    }
  }
}

const combinations = combine([1, 2, 2, 4], 2)
console.log('combinations:')
console.log(combinations)
console.log(combinations.length)
