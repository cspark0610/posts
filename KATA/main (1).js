// FizzBuzz
	
// Escribí un loop que imprima en la consola los números del 1 al 100. Deberá cumplir las siguientes condiciones: si el número a imprimir es múltiplo de 3, debe mostrar en la consola el string 'Fizz'. En cambio, si es múltiplo de 5, debe mostrar: 'Buzz'. Por último, si es múltiplo de ambos debe mostrar: 'FizzBuzz’
	
// Ejemplo de output:		
// 1		
// 2		
// Fizz		
// 4		
// Buzz		
// Fizz		
// ...		
// 14		
// FizzBuzz		
// 16 


/*function fizzBuzz() {
    for(let i = 1; i <= 100; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if(i % 5 === 0){
            console.log('Buzz')
        } else {
            console.log(i);
        }
    };
};

fizzBuzz();*/



/*Venganza de FizzBuzz 

Creá una función que tenga la misma funcionalidad que el FizzBuzz anterior, pero que reciba por parámetro las palabras a imprimir (en vez de Fizz y Buzz) y los números con los que se activan y el número máximo de iteraciones.
Output esperado: fizzBuzz('Plata', 'Forma', 2, 7, 17)	

1	
Plata	
3	
Plata	
5	
Plata	
Forma	
...	
PlataForma	
15
Plata	
17	*/

// function fizzBuzz(string, string2, num, num2, ite) {
//     for(let i = 1; i <= ite; i++) {
//         if(i % num === 0 && i % num2 === 0) {
//             console.log(string, string2);
//         } else if(i % num === 0) {
//             console.log(string);
//         } else if(i % num2 === 0) {
//             console.log(string2);
//         } else {
//             console.log(i);
//         };
//     };
// };

// fizzBuzz('plata', 'forma', 2, 7, 17);


/* Pluck

Escribí una función `pluck` que tome dos parámetros, un arreglo de objetos y el nombre de una propiedad. La función devolverá un nuevo arreglo solo con los valores dentro de la propiedad recibida.

Ejemplo: 

var productos = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }]	

pluck(productos, 'name') // ['TV LCD', 'Computadora']
pluck(productos, ‘price’) // [100, 500]
*/

// var productos = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }];

// function pluck(array, prop){
//     var res = [];
//     for(let i = 0; i < array.length; i++) {
//         res.push(array[i][prop]);
//     };
//     return res;
// };


/* Valor Stock
	
Escribí una función valorStock que tome un arreglo de productos como parámetro.	La función debe devolver un nuevo arreglo con objetos que tengan el nombre de cada producto y el valor total del stock:	

Ejemplo: 	

var productos = [{ name: 'TV LCD', price: 100, stock: 50}, { name: 'Computadora', price: 500, stock: 50 }, { name: 'Iphone', price: 1000, stock: 10}] 

valorStock(productos) // Debe retornar [{ TV LCD: 5000 }, { Computadora: 25000 }, { Iphone: 10000 }] */

// var productos = [{ name: 'TV LCD', price: 100, stock: 50}, { name: 'Computadora', price: 500, stock: 50 }, { name: 'Iphone', price: 1000, stock: 10}]

// function valorStock(array){
//     var res = [];
//     var precio;
//     for(let i = 0; i < array.length; i++){
//         precio = array[i].price * array[i].stock
//         res.push({[array[i].name] : precio});
//         };
//         return res;
// };


/* //SumArray 

//Escribí una función sumArray que tome dos parámetros, 
//un arreglo de números ordenados y un número. La función devolverá true, 
//si cualquier combinación de dos números dentro del arreglo suman 
//el número del segundo parámetro. Sino, devolverá false.   

// Tu función acá:

 
//Tests:

console.log(sumArray([2,5,7,10,11,15,20], 13))  // true     2+11 suman 13   
console.log(sumArray([2,5,7,10,11,15,20], 14))  // false */

function sumArray(array, num) {
   var acum;
    for(let i = 0; i < array.length; i++){
        for(let i2 = i + 1; i2 < array.length; i2++) {
            acum = array[i2] + array[i];
            if(acum == num){return true;};
        };
    };
    return false;
};

sumArray([2,5,7,10,11,15,20], 14);