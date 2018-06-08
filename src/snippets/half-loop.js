const swap = require('./array-swap');

function halfLoop(array) {
  for (let i=0, j=array.length-1; i<j; i++, j--) {
    swap(array, i, j);
  }

  console.log(array.join(' '));
}

module.export = halfLoop;
