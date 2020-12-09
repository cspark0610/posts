function gap(g,m,n){
    function isPrime(nro){
        let contador=0;
        for(let i=nro ; i>=1; i--){
            if(nro % i === 0 ) contador++;
        }
        return ((contador==2)?true : false);
    }
  
let arrGaps=[];
let arrPrimes =[];
while( n>m ){
let rdo=[];
    //crear el array con los numeros primos entre m y n;
    for(let i=m; i<=n; i++){
        if(isPrime(i)==true){
        arrPrimes.push(i);
        }
    }
let len= arrPrimes.length; // importante crear len en este punto y no antes      
    for(let j=0; j < len-1;j++){
    arrGaps.push(arrPrimes[j+1]-arrPrimes[j]);
    }

    //validar gap g si existe en arrGaps  luego pushaer los datos pedidos,
    if(arrGaps.indexOf(g)!==-1){
        rdo.push(arrPrimes[arrGaps.indexOf(g)]);
        rdo.push(arrPrimes[arrGaps.indexOf(g)+1]);
    
    }
let l= rdo.length;  
    return ((l===0)? null : rdo)
}    
}
  

console.log((gap(2,3,50)));