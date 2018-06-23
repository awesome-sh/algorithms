const {swap} = require('../array');

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }

  return array;
}

// result = bubbleSort([5, 4, 3, 2, 1]);
// console.log(result);

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

// result = betterBubbleSort([5, 4, 3, 2, 1]);
// console.log(result);

module.exports = {
  bubbleSort,
  betterBubbleSort
};
