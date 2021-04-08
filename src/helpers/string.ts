export const isLetter = (str: string): boolean => {
  const n = str.charCodeAt(0)
  return (
    (65 <= n && n <= 90) || // is uppercase?
    (97 <= n && n <= 122)
  ) // is lowercase?
}

export const isDigit = (str: string): boolean => {
  const n = str.charCodeAt(0)
  return 48 <= n && n <= 57
}

export const convertCharToDigit = (char: string): number => {
  return char.charCodeAt(0) - 'a'.charCodeAt(0)
}

export const convertStrToDigit = (str: string): number => {
  const digit: unknown = str
  const firstDigit: unknown = '0'
  return (digit as number) - (firstDigit as number)
}
