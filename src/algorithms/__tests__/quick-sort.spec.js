const { quickSort } = require('../quick-sort')

describe('Quick Sort', () => {
  it('sorts an array in place', () => {
    const array = [3, 2, 1]
    quickSort(array)
    expect(array).toEqual([1, 2, 3])
  })
})
