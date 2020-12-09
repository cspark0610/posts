/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!
*/
function findUniq(arr){

let rdos=[];
    for(let i=0; i<=arr.length-2; i++){
        for(let j=i+1; j<=arr.length-1; j++){

            if(arr[i]===arr[j]){
                rdos.push(true);
            }else {
                rdos.push(false);
            }
        }
    }
console.log(rdos);

console.log(arr[rdos.indexOf(false)+1])
return (arr[rdos.indexOf(false)+1])
}


findUniq([ 0, 0, 0.55, 0, 0 ]) //=== 0.55


//findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2