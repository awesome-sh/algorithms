/**
 * Rabin-Karp Algorithm
 * Explanation: https://brilliant.org/wiki/rabin-karp-algorithm/
 * Notes:
 * - Only the 26 lowercased letters are allowed (a-z). Because of that we create a positional numeric system of 26 possible values (1-26) where each value maps to a letter. We use the getCode() function for that. The positional nature of the system allows us to prevent collisions.
 * - For different sets of character we tweak that number. For lowercase plus uppercase, we'd use 52. For all ASCII codes, 128. For all Extended ASCII Codes, 256. And so on and so forth.
 * - An extra condition was added to prevent hash collision (text.substring(i, i + word.length) === word). Since we cannot validate every character in the text beforehand, if the text had different character (say 0-9), the algorithm would still work.
 */

const getCode = (letter: string) => letter.charCodeAt(0) - 'a'.charCodeAt(0) + 1

const hash = (str: string, wordLength: number) => {
  let hash = 0

  for (let i = 0; i < wordLength; i++) {
    hash += getCode(str[i]) * Math.pow(26, wordLength - 1 - i)
  }

  // For instance, the hash for string "ace" would be 759
  // -> hash = getCode('a')*26^2 + getCode('c')*26^1 + getCode('e')*26^0
  // -> hash = 1*26^2 + 3*26^1 + 5*26^0
  // -> hash = 759
  return hash
}

export const rabinKarp = (text: string, word: string): number => {
  const wordHash = hash(word, word.length)
  let windowHash: number

  for (let i = 0; i < text.length - word.length + 1; i++) {
    if (i === 0) {
      // Compute hash and cache it on a variable
      windowHash = hash(text, word.length)
    } else {
      // For instance, text "racecar" looking for "car". Word length 3, current window "ace".
      // current window hash = getCode('a')*26^2 + getCode('c')*26^1 + getCode('e')*26^0

      // Roll hash
      // 1. Let's remove factor "a" from the front
      // -> windowHash = ( getCode('a')*26^2 + getCode('c')*26^1 + getCode('e')*26^0 ) - getCode('a')*26^2
      windowHash -= getCode(text[i - 1]) * Math.pow(26, word.length - 1)

      // 2. Let's upgrade factors in the middle "c" and "e"
      // -> windowHash = ( getCode('c')*26^1 + getCode('e')*26^0 ) * 26
      windowHash *= 26

      // 3. Let's add factors "c" in the end
      // -> windowHash = ( getCode('c')*26^2 + getCode('e')*26^1 ) + getCode('c')*26^0
      windowHash += getCode(text[i - 1 + word.length]) * Math.pow(26, 0)

      // Result:
      // -> new window hash: getCode('c')*26^2 + getCode('e')*26^1 + getCode('c')*26^0
    }

    if (windowHash === wordHash) {
      // Prevents error on hash collisions
      if (text.substring(i, i + word.length) === word) {
        return i
      }
    }
  }

  return -1
}
