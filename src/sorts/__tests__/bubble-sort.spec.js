const { bubbleSort, betterBubbleSort } = require('../bubble-sort')

describe('Bubble Sort', () => {
  it('sorts an array in place', () => {
    const array = [2, 17, 15, 20, 9, 31]
    bubbleSort(array)
    expect(array).toEqual([2, 9, 15, 17, 20, 31])
  })

  it('sorts an array in a better way', () => {
    const array = [2, 17, 15, 20, 9, 31]
    betterBubbleSort(array)
    expect(array).toEqual([2, 9, 15, 17, 20, 31])
  })
})
