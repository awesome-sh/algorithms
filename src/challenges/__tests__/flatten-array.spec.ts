import { flatten, flattenIter } from '../flatten-array'

describe('Flatten Array', () => {
  it('flattens recursively an array', () => {
    const array = [1, { a: [2, [3]] }, 4, [5, [6]], [[7], 8, 9], 10, 'eleven']
    const expected = [1, { a: [2, [3]] }, 4, 5, 6, 7, 8, 9, 10, 'eleven']

    expect(flatten(array)).toEqual(expected)
  })

  it('flattens iteratively an array', () => {
    const array = [1, { a: [2, [3]] }, 4, [5, [6]], [[7], 8, 9], 10, 'eleven']
    const expected = [1, { a: [2, [3]] }, 4, 5, 6, 7, 8, 9, 10, 'eleven']

    expect(flattenIter(array)).toEqual(expected)
    expect(array).toEqual([])
  })
})
