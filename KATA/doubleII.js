
var paises = [
    {
        nombre: 'argentina',
    continente: 'sudamerica',
    poblacion: 40000000
    },
    {
        nombre: 'brasil',
    continente: 'sudamerica',
    poblacion: 300000000
    },
    {
        nombre: 'venezuela',
    continente: 'sudamerica',
    poblacion: 25000000
    },
    {
        nombre: 'chile',
    continente: 'sudamerica',
    poblacion: 10000000
    },
    {
        nombre: 'australia',
    continente: 'oceania',
    poblacion: 18000000
    },
    {
        nombre: 'nueva zelanda',
    continente: 'oceania',
    poblacion: 8000000
    },
    {
        nombre: 'china',
    continente: 'asia',
    poblacion: 1000000000
    },
    {
        nombre: 'tailandia',
    continente: 'asia',
    poblacion: 32000000
    },
    {
        nombre: 'vietnam',
    continente: 'asia',
    poblacion: 23000000
    },
    {
        nombre: 'españa',
    continente: 'europa',
    poblacion: 29000000
    },
    {
        nombre: 'alemania',
    continente: 'europa',
    poblacion: 33000000
    },
    {
        nombre: 'francia',
    continente: 'europa',
    poblacion: 65000000
    },
    {
        nombre: 'portugal',
    continente: 'europa',
    poblacion: 4000000
    },
    {
        nombre: 'grecia',
    continente: 'europa',
    poblacion: 12000000
    },
    ];
    /*4. Doble Filtro II

Ahora deben refactorizar la función doubleFilter, que recibirá los mismos tres parámetros pero en vez de devolver un arreglo con los nombres de los países que cumplan con las condiciones, devolverá un objeto con una key ‘nombres’ que tendrá como valor un arreglo con los nombres de los países y otra llamada ‘población total’ cuyo valor sea la suma de las poblaciones de los países filtrados.
Ejemplo:
doubleFilter(paises, ‘sudamerica’, 30000000) debe retornar {
									nombres: [‘argentina’, ‘brasil],
									poblacion total: 340000000
}
*/

function doubleII(arraydeObj, continente, numero){
    let objFinal={};
    let array=[];
    let arraydePoblaciones=[];
for(let i =0; i<arraydeObj.length; i++){
     
if(arraydeObj[i]['continente']===continente && arraydeObj[i]['poblacion'] > numero){
        array.push(arraydeObj[i]['nombre']);
        arraydePoblaciones.push(arraydeObj[i]['poblacion']);

//ARMO EL OBJETO UNA VEZ QUE TENGO LOS ARRAYS
        objFinal['nombres']=array;
        objFinal['poblacion total']=arraydePoblaciones.reduce((acc,total)=> acc+total);
        //acumulo la suma de los elem del arraydePoblaciones con reduce sin el 2do parametro
        }     
      
}
return (objFinal);

}
console.log(doubleII(paises, 'sudamerica', 30000000));
