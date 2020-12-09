function sumStrings(str1,str2){

let num1= BigInt(str1);
let num2= BigInt(str2);
console.log(num1);
console.log(num2);
    let sum = num1+num2
    return String(sum)
}
sumStrings('51168413213155115','9951949413515158885213156000255533600')
// no se puede usar BigInt

function sumStrings(x,y){

let arr1 = (String(x).split('')).map(i => parseInt (i));
let arr2 = (String(y).split('')).map(i => parseInt (i));

let n1 = arr1.length;
let n2 = arr2.length;
    for(let i=0 ; i< (n1-n2); i++){
        arr2.unshift(0)
    }
console.log(arr1);
console.log(arr2);
let rdo=[];
        for(let i= n1-1 ; i >=0; i--){
            if((arr1[i]+arr2[i])<10){
            rdo.push(arr1[i]+arr2[i])
        } else {
            rdo.push((arr1[i]+arr2[i])-10)
            rdo.push((arr1[i+1]+arr2[i+1])+1)
        }
    }
        console.log((rdo.join('')));
}
sumStrings(98715, 510)