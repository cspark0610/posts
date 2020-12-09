function list(array){

let str_final="";
let contador =1;

if(array.length === 0){
    return str_final;
}else if(array.length == 1){

    str_final += `${array[0]['name']}`;

}else if(array.length == 2){

    str_final +=`${array[0]['name']} & ${array[1]['name']}`;  
    

}else {
    for(let i=0; i <= array.length-2 ; i++){
        
    str_final += array[i]['name'];
    (contador > array.length-2)?str_final += " ":str_final += ", "
    contador++  
    }
    str_final += "&"+" "+array[array.length-1]['name'];

}
console.log(str_final);
return str_final;
}

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}, {name: 'Homer'}]);

//6KYU
/*
Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
*/