/*
Simple frequency sort
In this Kata, you will sort elements in an array by decreasing frequency of elements. If two elements have the same frequency, sort them by increasing value.
*/
function solve(arr){
let sorted = arr.sort((a,b)=> a-b);
let newArr=[];
console.log(sorted);
//(9) [2, 3, 3, 3, 5, 5, 7, 7, 9]
let index = [];
for(let i=0; i<sorted.length;i++){
index.push(sorted.indexOf(sorted[i]));
}
console.log(index);
//(9)[0, 1, 1, 1, 4, 4, 6, 6, 8] me sirve como frecuencia

let filtered = arr.filter((item, index)=>{
    if(arr.indexOf(item)>= index) {
            return item 
    }
})
console.log(filtered);
//(5) [2, 3, 5, 7, 9]

}

solve([2,3,5,3,7,9,5,3,7]) 

//= [3,3,3,5,5,7,7,2,9]
//--we sort by highest frequency to lowest frequency. If two elements have same frequency, we sort by increasing value
function solve(arr){
  let obj = {};
  arr.forEach(item => obj[item] = (obj[item] + 1 || 1 ));
  console.log(obj);
  return arr.sort((a,b) => obj[b] === obj[a] ?  a - b : obj[b] - obj[a]);
}
solve([2,3,5,3,7,9,5,3,7]) 
//
function eliminarRepetidos(array){

  let filtrado= array.filter((item, index)=>{
      if(array.indexOf(item) >= index){
        return item
      }

  });
  console.log(filtrado);
  return filtrado;
}
eliminarRepetidos([2,3,5,3,7,9,5,3,7])