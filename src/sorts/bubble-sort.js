// Ativar Quokka
const {swap} = require('../snippets/array');
let result;

function bubbleSort(A) {
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A.length - i - 1; j++) {
      if (A[j] > A[j + 1]) {
        swap(A, j, j + 1);
      }
    }
  }

  return A;
}

result = bubbleSort([5, 4, 3, 2, 1]);
console.log(result);

function betterBubbleSort(array) {
  let swapped = false;

  do {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
        swapped = true;
      }
    }
  } while (swapped);
}

result = betterBubbleSort([5, 4, 3, 2, 1]);
console.log(result);
