import { clone, fill, leftRotation, matrix, push, pop, ranking, reverse, swap, truncate, numberOfDigits } from '../utils'

describe('Numbers', () => {
  it('returns the number of digits in an integer', () => {
    expect(numberOfDigits(0)).toBe(1)
    expect(numberOfDigits(1)).toBe(1)
    expect(numberOfDigits(10)).toBe(2)
    expect(numberOfDigits(11)).toBe(2)
    expect(numberOfDigits(100)).toBe(3)
    expect(numberOfDigits(101)).toBe(3)
  })

  it('truncates a float number', () => {
    expect(truncate(10.5)).toBe(10)
  })

  it('adds a digit to the end', () => {
    expect(push(123, 4)).toBe(1234)
  })

  it('removes the digit in the end', () => {
    expect(pop(1234)).toEqual([123, 4])
  })

  it('creates a NxN matrix', () => {
    const grid = matrix(4, 4)
    expect(grid.length).toBe(4)
    expect(grid[0].length).toBe(4)
  })
})

describe('Arrays', () => {
  it('clones an array', () => {
    const array = [1, 2, 3]
    const cloned = clone(array)

    expect(cloned).not.toBe(array)
  })

  it('created a filled array', () => {
    expect(fill(3, 4)).toEqual([4, 4, 4])
  })

  it('reverses an array', () => {
    const array = [1, 2, 3]
    expect(reverse(array)).toEqual([3, 2, 1])
  })

  it('swaps two items in an array', () => {
    const array = [1, 2, 3, 4]
    swap(array, 1, 3)
    expect(array).toEqual([1, 4, 3, 2])
  })

  it('created a ranking', () => {
    expect(ranking([79, 5, 18, 5, 32, 1, 16, 1, 82, 13])).toEqual([2, 7, 4, 7, 3, 9, 5, 9, 1, 6])
  })

  it('rotates array "n" times', () => {
    expect(leftRotation([1, 2, 3, 4, 5], 3)).toEqual([4, 5, 1, 2, 3])
  })
})
