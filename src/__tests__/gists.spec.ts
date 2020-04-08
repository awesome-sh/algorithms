import { numberOfDigits } from '../gists'

describe('Gists', () => {
  it('returns the number of digits in an integer', () => {
    expect(numberOfDigits(0)).toBe(1)
    expect(numberOfDigits(1)).toBe(1)
    expect(numberOfDigits(10)).toBe(2)
    expect(numberOfDigits(11)).toBe(2)
    expect(numberOfDigits(100)).toBe(3)
    expect(numberOfDigits(101)).toBe(3)
  })
})
