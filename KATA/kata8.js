/*
reverseWords("The greatest victory is that which requires no battle")
 should return "battle no requires which that is victory greatest The"

*/

function reverseWords(str){

let array=str.split(' ');
console.log(array);
let newArray=[];

for(let i = array.length-1 ; i>=0; i--){ //i= 8 7 6 5 4 3 2 1 0

newArray.push(array[i]);
}
console.log(newArray.join(' '));
}
reverseWords("The greatest victory is that which requires no battle");

/*A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcisstic:

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
and 1652 (4 digits), which isn't:

    1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938


*/
function narcissistic(value) {
 let array_str = (String(value).split(''));
 let array_nros = array_str.map(item => parseInt(item));
 let suma_cuadrados=0;
    for(let i=0 ; i<array_nros.length; i++){
    suma_cuadrados += Math.pow(array_nros[i],array_nros.length);
    }
    console.log(suma_cuadrados);
if(suma_cuadrados == value){
    return true;
} else {
    return false;
}
}
narcissistic(1652);
/*
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.

Examples
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false
*/
function isSquare(num){

    let square = [];
for(let i=0; i<=num; i++){
    square.push(i*i);
    console.log(square);
    }
let rdos_boolean =[];
for(let j=0 ; j<square.length; j++){
    if(square[j] !== num){
        rdos_boolean.push(false)
    }else {
        rdos_boolean.push(true)
    }
}
console.log(rdos_boolean);
if(rdos_boolean.indexOf(true)===-1){
    return false
}else {
    return true
}

}
isSquare(3);