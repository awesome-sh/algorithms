import { toRoman, fromRoman, sumRoman } from '../roman'

describe('Roman', () => {
  it('converts integer to roman', () => {
    expect(toRoman(1998)).toBe('MCMXCVIII')
  })

  it('converts roman to integer', () => {
    expect(fromRoman('MCMXCVIII')).toBe(1998)
  })

  it('sums two roman numerals', () => {
    // 123 + 456 = 579
    expect(sumRoman('CXXIII', 'CDLVI')).toBe('DLXXIX')
  })
})
