const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
const roman = [
  'M',
  'CM',
  'D',
  'CD',
  'C',
  'XC',
  'L',
  'XL',
  'X',
  'IX',
  'V',
  'IV',
  'I',
]

// Greedy approach: take out the big number until it hits zero
export const toRoman = (num: number): string => {
  let result = ''

  for (let i = 0; i < decimal.length; i++) {
    while (decimal[i] <= num) {
      num -= decimal[i]
      result += roman[i]
    }
  }

  return result
}

const values = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1,
}

export const fromRoman = (str: string): number => {
  let result = 0

  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    const nextChar = str[i + 1]

    if (values[char] < values[nextChar]) {
      result -= values[char]
    } else {
      result += values[char]
    }
  }

  return result
}

export const sumRoman = (roman1: string, roman2: string): string => {
  const sum = fromRoman(roman1) + fromRoman(roman2)
  return toRoman(sum)
}
