function factorial (n) {
  if (n <= 1) {
    return 1
  }

  return n * factorial(n - 1)
}

const memo = []

function fibonacci (n) {
  if (n <= 1) {
    return 1
  }

  if (!memo[n]) {
    memo[n] = fibonacci(n - 1) + fibonacci(n - 2)
  }

  return memo[n]
}

function isPalindrome (str) {
  if (str.length <= 1) {
    return true
  }

  return str[0] === str[str.length - 1] && isPalindrome(str.slice(1, str.length - 1))
}

module.exports = {
  factorial,
  fibonacci,
  isPalindrome
}
