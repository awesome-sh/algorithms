const { mergeSort } = require('../merge-sort')

describe('Merge sort', () => {
  it('sorts an array not in place', () => {
    const array = [2, 17, 15, 20, 9, 31]
    expect(mergeSort(array)).toEqual([2, 9, 15, 17, 20, 31])
  })
})
