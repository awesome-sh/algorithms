import { toRoman, fromRoman } from '../roman'

describe('Roman', () => {
  it('converts integer to roman', () => {
    expect(toRoman(1998)).toBe('MCMXCVIII')
  })

  it('converts roman to integer', () => {
    expect(fromRoman('MCMXCVIII')).toBe(1998)
  })
})
