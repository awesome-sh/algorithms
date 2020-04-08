import { toRoman, fromRoman } from '../roman'

describe('Roman', () => {
  it('converts number to roman', () => {
    expect(toRoman(1998)).toBe('MCMXCVIII')
  })

  it('converts roman to number', () => {
    expect(fromRoman('MCMXCVIII')).toBe(1998)
  })
})
