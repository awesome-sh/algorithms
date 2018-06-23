function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid, array.length);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(L, R) {
  let result = [];
  let l = 0;
  let r = 0;

  while (l < L.length && r < R.length) {
    if (L[l] < R[r]) {
      result.push(L[l++]);
    } else {
      result.push(R[r++]);
    }
  }

  while (l < L.length) {
    result.push(L[l++]);
  }

  while (r < R.length) {
    result.push(R[r++]);
  }

  return result;
}

let result = mergeSort([5, 4, 3, 2, 1]);
console.log(result);


function mergeSort2(array) {
  if (array.length === 1) {
    return array;
  }

  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid, array.length);

  return merge2(mergeSort2(left), mergeSort2(right));
}

function merge2(L, R) {
  let result = [];
  let l = L.shift();
  let r = R.shift();

  while (l !== undefined && r !== undefined) {
    if (l < r) {
      result.push(l);
      l = L.shift();
    } else {
      result.push(r);
      r = R.shift();
    }
  }

  while (L.length) {
    result.push(L.shift());
  }

  while (R.length) {
    result.push(R.shift());
  }

  return result;
}

result = mergeSort2([5, 4, 3, 2, 1]);
console.log(result);
