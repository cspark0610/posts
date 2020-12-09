/*
Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
Rules:
You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return 0.00

You will only be given Natural Numbers as arguments.

Examples:
SeriesSum(1) => 1 = "1.00"
SeriesSum(2) => 1 + 1/4 = "1.25"
SeriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"
*/

//armo en un array la serie  1, 4 , 7 , 10, 13
function SeriesSum(n){

let a=[1];
//armo los numeros de la serie que luego voy a usar en la sumatoria y los guardo en un array
    for(let i=1; i<= n-1; i++){
        a.push(1+3*i);
        console.log(a);        
    }

    let ss=1; //empiezo en 1
    for(let j=1; j<=n-1; j++){ // armo la sumatoria 

        ss += (1/a[j]);
    }
    console.log(ss.toFixed(2));

}
SeriesSum(5);