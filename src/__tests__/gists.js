const { length } = require('../gists')

describe('Gists', () => {
  it('returns the number of digits in an integer', () => {
    expect(length(0)).toBe(1)
    expect(length(1)).toBe(1)
    expect(length(10)).toBe(2)
    expect(length(11)).toBe(2)
    expect(length(100)).toBe(3)
    expect(length(101)).toBe(3)
  })
})
