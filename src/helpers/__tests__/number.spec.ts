import { mark, push, pop, truncate, unmark, numberOfDigits } from '../number'

describe('Number', () => {
  it('returns the number of digits in an integer', () => {
    expect(numberOfDigits(0)).toBe(1)
    expect(numberOfDigits(1)).toBe(1)
    expect(numberOfDigits(10)).toBe(2)
    expect(numberOfDigits(11)).toBe(2)
    expect(numberOfDigits(100)).toBe(3)
    expect(numberOfDigits(101)).toBe(3)
  })

  it('truncates a float number', () => {
    expect(truncate(10.5)).toBe(10)
  })

  it('adds a digit to the end', () => {
    expect(push(123, 4)).toBe(1234)
  })

  it('removes the digit in the end', () => {
    expect(pop(1234)).toEqual([123, 4])
  })

  it('marks a positive number', () => {
    expect(mark(4)).toBe(-4)
  })

  it('marks a negative number', () => {
    expect(mark(-4)).toBe(-4)
  })

  it('unmarks a positive number', () => {
    expect(unmark(4)).toBe(4)
  })

  it('unmarks a negative number', () => {
    expect(unmark(-4)).toBe(4)
  })
})