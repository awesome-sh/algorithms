
export function truncate (num: number): number {
  return num | 0
}

export function pop (num: number): [number, number] {
  const digit = num % 10
  num = (num / 10) | 0
  return [num, digit]
}

export function push (num: number, digit: number): number {
  return num * 10 + digit
}

export function numberOfDigits (number: number): number {
  let counter = 0

  do {
    [number] = pop(number)
    counter++
  } while (number)

  return counter
}

export function mark (number: number): number {
  if (number < 0) {
    return number
  }
  return number * -1
}

export function unmark (number: number): number {
  if (number < 0) {
    return number * -1
  }
  return number
}