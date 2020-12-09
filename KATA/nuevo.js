/* Pluck

Escribí una función `pluck` que tome dos parámetros, un arreglo de objetos y el nombre de una propiedad. La función devolverá un nuevo arreglo solo con los valores dentro de la propiedad recibida.

Ejemplo: 

var productos = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }]	

pluck(productos, 'name') // ['TV LCD', 'Computadora']
pluck(productos, ‘price’) // [100, 500]
*/
/*
 var productos = [{ name: 'TV LCD', price: 100}, 
                  { name: 'Computadora', price: 500 }];

                  //productos[0]['price'] ... 100
                  //productos[1]['price']... 500
function pluck(array,propiedad){

    let rdo=[];
    for(let i=0; i<array.length; i++){

        rdo.push(productos[i][propiedad]);
    }
console.log(rdo);
}                  
pluck(productos, 'name');

*/
/* Valor Stock
	
Escribí una función valorStock que tome un arreglo de productos como parámetro.	La función debe devolver un nuevo arreglo con objetos que tengan el nombre de cada producto y el valor total del stock:	

Ejemplo: 	

valorStock(productos) // Debe retornar [{ TV LCD: 5000 }, { Computadora: 25000 }, { Iphone: 10000 }] */

// var productos = [{ name: 'TV LCD', price: 100, stock: 50}, { name: 'Computadora', price: 500, stock: 50 }, { name: 'Iphone', price: 1000, stock: 10}]
var productos = [{ name: 'TV LCD', price: 100, stock: 50}, 
                 { name: 'Computadora', price: 500, stock: 50 }, 
                 { name: 'Iphone', price: 1000, stock: 10}
                ];
    //valorTotal = productos[i][price]* productos[i][stock]
    //nueva propiedad del obj.. [array[i]['name']]

    function valorStock(array){
        let rdo=[];
            for(let i=0; i<array.length;i++){
                
                let valorTotal = array[i]['price']* array[i]['stock'];
                rdo.push( {[array[i]['name']]:valorTotal})
                ///el obj tiene formato {[prop]: valorProp}
            }
            console.log(rdo);
    }
    valorStock(productos);

    /*/* //SumArray 

//Escribí una función sumArray que tome dos parámetros, 
//un arreglo de números ordenados y un número. La función devolverá true, 
//si cualquier combinación de dos números dentro del arreglo suman 
//el número del segundo parámetro. Sino, devolverá false.   

// Tu función acá:

 
//Tests:

console.log(sumArray([2,5,7,10,11,15,20], 13))  // true     2+11 suman 13   
console.log(sumArray([2,5,7,10,11,15,20], 14))  // false */

function SumArray(array, nro){


    for(let i=0; i < array.length-1; i++){
        for(j=i+1; j < array.length; j++){
            
            if(nro === (array[i]+array[j])){
                return true;    
            }
        }
    }
return false;
}
SumArray([2,5,7,10,11,15,20], 13);

 //OTRA FORMA CREAR EL OBJ DENTRO DEL FOR Y LUEGO PUSHEAR ESE OBJ; EN VEZ DE PUSHEAR EL OBJ 
var productos = [{ name: 'TV LCD', price: 100, stock: 50}, 
                 { name: 'Computadora', price: 500, stock: 50 }, 
                 { name: 'Iphone', price: 1000, stock: 10}
                ];
function valorStock(array){
        let rdo=[];
       
        for(let i=0; i<array.length;i++){
            let obj={};  
            obj[array[i]['name']] = array[i]['price']* array[i]['stock'];
            rdo.push(obj);
                                                        ///el obj tiene formato {[prop]: valorProp}
        }        
        console.log(rdo);
        return rdo;
    }
valorStock(productos);
