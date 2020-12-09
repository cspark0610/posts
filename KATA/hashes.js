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

function list(array){

let array_final=[];

if(array.length === 0){
    return array_final.join('');
}else if(array.length == 1){
    array_final.push(`${array[0]['name']}`);

}else if(array.length == 2){
    array_final.push(`${array[0]['name']} & ${array[1]['name']}`);  
    

}else {
    for(let i=0; i <= array.length-2 ; i++){
        array_final.push(`${array[i]['name']}`);
        array_final.push(`,`);
        console.log(array_final);

        }
       array_final.pop();
       array_final.push(`& ${array[array.length-1]['name']}`);
        console.log(array_final);

}
return array_final.join(',');
}

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}]);


