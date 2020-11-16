import { subsets, permute, combine } from '../combinatorics'

describe('Subsets', () => {
  it('generates all subsets of an array', () => {
    expect(subsets([1, 2, 3])).toEqual([
      [],
      [1],
      [1, 2],
      [1, 2, 3],
      [1, 3],
      [2],
      [2, 3],
      [3],
    ])
  })
})

describe('Permutations', () => {
  it('generates all permutations of an array', () => {
    expect(permute([1, 2, 3])).toEqual([
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ])
  })

  it('generates all permutations of an array given k spots', () => {
    expect(permute([1, 2, 3], 2)).toEqual([
      [1, 2],
      [1, 3],
      [2, 1],
      [2, 3],
      [3, 1],
      [3, 2],
    ])
  })
})

describe('Combinations', () => {
  it('generates all combinations of an array', () => {
    expect(combine([1, 2, 3])).toEqual([[1, 2, 3]])
  })

  it('generates all combinations of an array given k spots', () => {
    expect(combine([1, 2, 3], 2)).toEqual([
      [1, 2],
      [1, 3],
      [2, 3],
    ])
  })
})
