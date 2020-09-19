export const isPalindrome = (str: string): boolean => {
  if (!str) {
    return true
  }

  const helper = (str: string, start: number, end: number) => {
    if (start === end) {
      return true
    }

    return str[start] === str[end] && helper(str, start + 1, end - 1)
  }

  return helper(str, 0, str.length - 1)
}
