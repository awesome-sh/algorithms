export const subsets = (nums: number[]): number[][] => {
  const result = []
  subsetsBacktrack(nums, 0, [], result)
  return result
}

const subsetsBacktrack = (
  nums: number[],
  start: number,
  current: number[],
  result: number[][]
) => {
  result.push([...current]) // Add current list at each call

  for (let i = start; i < nums.length; i++) {
    current.push(nums[i])
    subsetsBacktrack(nums, i + 1, current, result)
    current.pop()
  }
}

// Como lidar com duplicates?
export const permute = (
  nums: number[],
  k: number = nums.length
): number[][] => {
  const result = []
  permuteBacktrack(nums, k, 0, [], result)
  return result
}

const permuteBacktrack = (
  nums: number[],
  k: number,
  start: number,
  current: number[],
  result: number[][]
) => {
  if (current.length === k) {
    result.push([...current]) // Add current list at the top of the callstack
  } else {
    for (let i = start; i < nums.length; i++) {
      if (!current.includes(nums[i])) {
        current.push(nums[i])
        permuteBacktrack(nums, k, start, current, result)
        current.pop()
      }
    }
  }
}

const permutations = permute([1, 2, 3], 2)
console.log('Permutations:')
console.log(permutations)
console.log(permutations.length)

// Como lidar com duplicates?
export const combine = (
  nums: number[],
  k: number = nums.length
): number[][] => {
  const result = []
  combineBacktrack(nums, k, 0, [], result)
  return result
}

const combineBacktrack = (
  nums: number[],
  k: number,
  start: number,
  current: number[],
  result: number[][]
) => {
  if (current.length === k) {
    result.push([...current])
  } else {
    for (let i = start; i < nums.length; i++) {
      current.push(nums[i])
      combineBacktrack(nums, k, i + 1, current, result)
      current.pop()
    }
  }
}

const combinations = combine([1, 2, 3, 4], 2)
console.log('combinations:')
console.log(combinations)
console.log(combinations.length)

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
