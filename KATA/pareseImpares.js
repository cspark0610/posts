/*
1. Pares e Impares
Deben crear una función llamada paresEimpares que reciba 3 parámetros. Los dos primeros números y el tercero una palabra (string).
La función tiene que mostrar en la consola los números entre el cero y el primer parámetro que recibe pero debe en primer lugar mostrar todos los números pares y luego los impares. Además, cuando el número sea divisible por el segundo parámetro pasado a la función, en vez de loggearlo, debe imprimir la palabra que recibe como tercer parámetro. 

Ejemplo: 
paresEImpares(10,7,’prueba’) ====> 
0
2
4
6
8
10
1
3
5
’Prueba’
9
*/

function paresEImpares(nro1,nro2,palabra){
for(let i=0; i<= nro1; i+=2){
    console.log(i);
}
for(let j=1; j< nro1; j+=2){
    if( j%nro2 === 0) {
        console.log(`${palabra}`) 
     }else{
        console.log(j);
    }
}
}
paresEImpares(10,7, 'prueba')