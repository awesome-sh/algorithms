export function truncate (num) {
  return num | 0
}

export function pop (num) {
  const digit = num % 10
  num = (num / 10) | 0
  return [num, digit]
}

export function push (num, digit) {
  return num * 10 + digit
}

export function numberOfDigits (number) {
  let counter = 0

  do {
    [number] = pop(number)
    counter++
  } while (number)

  return counter
}

export function matrix (rows, cols) {
  return Array(rows).fill(Array(cols))
}
