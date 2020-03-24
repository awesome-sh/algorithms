function truncate (num) {
  return num | 0
}

function matrix (rows, cols) {
  return Array(rows).fill(Array(cols))
}

module.exports = {
  matrix,
  truncate
}
