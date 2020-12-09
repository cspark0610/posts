/*
//reserveKeys
/*16. {value: key} kelue: vay
Debés crear una función llamada `reverseKeys` que reciba un objeto como paŕámetro.
Si ese paŕametro no es un objeto, deberá devolver un string que indique qué tipo de
dato fue ingresado como input y por qué no es válido.
Si el parámetro es un objeto, la función deberá devolver otro objeto. Deberá tener todas
las propiedades que sean un string puestas como key y el value deberá ser el key
anterior.
Ejemplo:
- reverseKeys(344) debería devolver “error, input can’t be a number”
- reverseKeys([ ]) debería devolver “error, input can’t be an Array”
- reverseKeys(‘hola’) debería devolver “gerror, input can’t be a strin”*/
let prueba = {
nombre: 'santi',
edad: 22,
nacionalidad: 'de otro planeta',
documento: 44444444
}

function reverseKeys(obj){

       let newObj={};
       
if(typeof obj=== 'number'){
    console.log("ERROR");
}else if(typeof obj=== 'string'){
    console.log("error");
}else if( Array.isArray(obj) === true){
    console.log("error");
} else {

    
    for(let key in obj){
     
        newObj[obj[key]] = key;
    }
}
return (newObj);
}
console.log(reverseKeys(prueba));