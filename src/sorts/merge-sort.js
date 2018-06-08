// Ativar Quokka

function mergeSort(A) {
  if (A.length === 1) {
    return A;
  }

  let mid = Math.floor(A.length / 2);
  let L = A.slice(0, mid);
  let R = A.slice(mid, A.length);

  return merge(mergeSort(L), mergeSort(R));
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


function mergeSort2(A) {
  if (A.length === 1) {
    return A;
  }

  let mid = Math.floor(A.length / 2);
  let L = A.slice(0, mid);
  let R = A.slice(mid, A.length);

  return merge2(mergeSort2(L), mergeSort2(R));
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
