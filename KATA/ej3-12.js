function ej12(){

let nPares = 0; 
let nImpares = 0; //
let sumaPares = 0; 
let sumaImpares = 0; 
let i = 0;
        while(i < 10){
            let n= parseInt(prompt('ingresa un numero'));
            if(n%2===0){
                nPares++;
                sumaPares = sumaPares + n;
            }else {
                nImpares++;
                sumaImpares = sumaImpares + n; 
            }    

            i++;
        }
        console.log(nPares);
        console.log( sumaImpares / nImpares);
}
ej12();