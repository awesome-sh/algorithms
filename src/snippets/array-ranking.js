// Array desordenado
const array = [79, 5, 18, 5, 32, 1, 16, 1, 82, 13];

// Clona e ordena de forma ascendente
const sorted = array.slice().sort((a, b) => b-a);

// Clona e, para cada item, indique a posição no ranking
const ranks = array.slice().map((v) => sorted.indexOf(v)+1);

console.log(ranks);
