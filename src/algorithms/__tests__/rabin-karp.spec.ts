import { rabinKarp } from '../rabin-karp'

describe('Rabin Karp', () => {
  it('returns the word index when word if found', () => {
    const text = 'the quick brown fox jumps over the lazy dog'
    expect(rabinKarp(text, 'dog')).toBe(40)
  })

  it('returns -1 when word is not found', () => {
    const text = 'the quick brown fox jumps over the lazy dog'
    expect(rabinKarp(text, 'cat')).toBe(-1)
  })
})
