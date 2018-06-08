// Ativar Quokka
let result;

function selectionSort(A) {
  let indexMin;
  let tmp;

  // Itere n-1 vezes
  for (let i = 0; i < A.length - 1; i++) {
    // A cada iteração, determine quem será trocado. Começa com o primeiro
    // elemento, depois o segundo, etc.
    indexMin = i;

    // A partir de i, compare o elemento i com os demais a direta
    for (let j = i; j < A.length; j++) {
      // Sempre que achar um elemento menor que o elemento i,
      // atualize o indexMin.
      if (A[j] < A[indexMin]) {
        indexMin = j;
      }
    }

    // Quando acabar as iterações, troque o elemento atual com o menor elemento encontrado.
    if (i !== indexMin) {
      tmp = A[indexMin];
      A[indexMin] = A[i];
      A[i] = tmp;
    }
  }
}

result = selectionSort([5, 4, 3, 2, 1]);
console.log(result);
