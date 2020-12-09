function fibonacci(n){

let fib=[];

fib[0]=0;
fib[1]=1;
    for(let i=2; i<n; i++){
        
    fib.push(fib[i-1]+fib[i-2]);
               
}
console.log(fib);
let sum=(fib.filter(item => item%2===0 && item < n)).reduce((acc,total)=> acc+total);
return sum;
}
fibonacci(35)