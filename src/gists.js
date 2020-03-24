function truncate (num) {
  return num | 0
}

function pop (num) {
  const digit = num % 10
  num = (num / 10) | 0
  return [num, digit]
}

function push (num, digit) {
  return num * 10 + digit
}

function matrix (rows, cols) {
  return Array(rows).fill(Array(cols))
}

module.exports = {
  matrix,
  pop,
  push,
  truncate
}
