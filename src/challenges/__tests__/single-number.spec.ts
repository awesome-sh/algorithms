import { findSingle } from '../single-number'

describe('findSingle', () => {
  it('finds the non-duplicate number in an array of duplicates', () => {
    expect(findSingle([4, 1, 2, 1, 2])).toBe(4)
  })
})
