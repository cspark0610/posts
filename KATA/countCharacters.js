/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/


function countCharacters(str){

let arr = str.split('');
let obj={};
    let frec=arr.map(item => obj[item]= obj[item]+1 || 1); 
    console.log(frec);
    
return obj;
}
countCharacters('plataforma');