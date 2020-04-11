import { quickSort } from '../quick-sort'

describe('Quick Sort', () => {
  it('sorts a descending array in place', () => {
    const array = [3, 2, 1]
    quickSort(array)
    expect(array).toEqual([1, 2, 3])
  })
})
