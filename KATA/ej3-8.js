function sumattion(n){
let contador =0;
let suma =0 ;

while (contador < n){
    let n = parseInt(prompt('ingresa un numero'));
    suma = suma+n;

    contador ++;
}

console.log(suma);
return suma;
}
console.log(sumattion(11));