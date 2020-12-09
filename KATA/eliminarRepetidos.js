
function eliminarRepetidos(arr){

let temp;
let n= arr.length;
let final=[];

    for(let i=0; i<n; i++){
        if(temp!==arr[i]){ // para i=0 temp vale undefined
            final.push(arr[i]);
            temp=arr[i];
        }        
    }

return final;
}
console.log(eliminarRepetidos([2,2,5,1,3,3,4,9]));

/*
function eliminarRepetidos(arr){
    let final= new Set(arr)
    return ([...final]);
}
console.log(eliminarRepetidos([2,2,5,1,3,3,4,9]));
*/
/*
function eliminarRepetidos(arr){

    let obj={};
    for(let i of arr){
        obj[i] = true;
    }
    console.log(obj);
    return Object.keys(obj).map(item => Number(item)); // devuelve de menor a mayor
}
console.log(eliminarRepetidos([2,2,5,1,3,3,4,9]));
*/
