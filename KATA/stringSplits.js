/*
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:
*/
function solution(str){

let newStr ="";
let arr = [];

console.log((str.substr(0,2)).length);

    for(let i=0; i<str.length ; i+=2){
        if(str.substr(i,2).length == 2){
            arr.push(str.substr(i,2));
        } else{
            newStr += str.substr(i,1)+"_";
            arr.push(newStr);
        }
    }
console.log(arr);

}
solution('abcdefg') // should return ['ab', 'cd', 'ef']

//solution('abc') // should return ['ab', 'c_']