/*
crear una funcion que reciba como parametro un array de nros y devuelva un array con los numeros ordenados segun su frecuencia.
Si dos nros coinciden en frecuencia se ordenara de forma creciente*/
/*solve([2,3,5,3,7,9,5,3,7]) devolvera
[3,3,3,5,5,7,7,2,9]*/

function solve(data) {
  const freq = data.reduce((r, e) => {
    if (!r[e]) r[e] = 1;
    else r[e]++;
    console.log(r);
    return r;
  }, {})

  return [...data].sort((a, b) => {
    return freq[b] - freq[a] || a - b
  })
}

console.log(solve([1, 2, 3, 0, 5, 0, 1, 6, 8, 8, 6, 9, 1]))
console.log(solve([2, 3, 5, 3, 7, 9, 5, 3, 7]))