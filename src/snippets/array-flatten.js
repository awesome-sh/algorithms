const input = [1, {a: [2, [3]]}, 4, [5, [6]], [[7], 8, 9], 10, 'eleven'];

// Is this a post order DFS?
function flatten(array) {
  // If it is a leaf
  if (!Array.isArray(array)) { // recursion base case
    // Return flat array to parent
    return [array];
  }

  let memo = [];

  // For each child, from left to right
  for (let i=0; i<array.length; i++) {
    memo = memo.concat(flatten(array[i]));
  }

  // Return flat array to parent
  return memo;
}

console.log(flatten(input));
// output: [1, {a: [2, [3]]}, 4, 5, 6, 7, 8, 9, 10, 'eleven'];


// Clone input
const input2 = input.slice(0);

const flattenIter = (stack) => {
  let result = [];
  let item;

  while (stack.length) {
    // Altera o array original
    item = stack.shift();

    if (Array.isArray(item)) {
      stack.unshift(...item);
    } else {
      result.push(item);
    }
  }

  return result;
};

console.log('flattenIter output: ', flattenIter(input2));
// output: [1, {a: [2, [3]]}, 4, 5, 6, 7, 8, 9, 10, 'eleven'];

console.log('flattenIter input: ', input2);
// output: []

// http://blog.benoitvallon.com/tips/flattening-arrays-in-javascript/
// http://amanvirk.me/flatten-an-array-without-recursion/
