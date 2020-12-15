export const truncate = (num: number): number => {
  return num | 0 // Explanation: https://bit.ly/2U9J0tW
}

export const pop = (num: number): [number, number] => {
  const digit = num % 10
  num = truncate(num / 10)
  return [num, digit]
}

export const push = (num: number, digit: number): number => {
  return num * 10 + digit
}

export const numberOfDigits = (number: number): number => {
  let counter = 0

  do {
    const result = pop(number)
    number = result[0]
    counter++
  } while (number)

  return counter
}

export const mark = (number: number): number => {
  if (number < 0) {
    return number
  }
  return number * -1
}

export const unmark = (number: number): number => {
  if (number < 0) {
    return number * -1
  }
  return number
}
