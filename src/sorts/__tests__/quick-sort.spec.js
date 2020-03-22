const { quickSort } = require('../quick-sort')

describe('Quick sort', () => {
  it('sorts an array in place', () => {
    const array = [45, 2, 17, 15, 20, 9, 31]
    quickSort(array)
    expect(array).toEqual([2, 9, 15, 17, 20, 31, 45])
  })
})
