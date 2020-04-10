import { mergeSort } from '../merge-sort'

describe('Merge Sort', () => {
  it('sorts an array in place', () => {
    const array = [2, 17, 15, 20, 9, 31]
    mergeSort(array)
    expect(array).toEqual([2, 9, 15, 17, 20, 31])
  })
})
