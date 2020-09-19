import { isPalindrome } from '../is-palindrome'

describe('isPalindrome', () => {
  it('detects a palindrome', () => {
    expect(isPalindrome('abcba')).toBe(true)
  })

  it('detects an empty palindrome', () => {
    expect(isPalindrome('')).toBe(true)
  })

  it('detects a one-letter palindrome', () => {
    expect(isPalindrome('a')).toBe(true)
  })

  it('detects a non-palindrome string', () => {
    expect(isPalindrome('abcca')).toBe(false)
  })
})
