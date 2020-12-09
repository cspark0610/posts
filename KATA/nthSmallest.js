/*nth
Given an array/list [] of integers , Find the Nth smallest element in this array of integers

Notes
Array/list size is at least 3 .

Array/list's numbers could be a mixture of positives , negatives and zeros .

Repetition in array/list's numbers could occur , so don't Remove Duplications .

Input >> Output Examples*/

function nthSmallest(arr, num){

let sorted = arr.sort((a,b)=> a-b);
console.log(sorted);

console.log(arr[num-1]); // porque el index empieza en 0
return (arr[num-1]);
}
nthSmallest([2,169,13,-5,0,-1] ,4)