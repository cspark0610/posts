
function alphanumeric(str){
 
let regex = /[^a-z0-9]/ig;   
let arr= str.match(regex);
console.log(arr);
if(arr===null){
    return true
}else{
    return false
}
   
}
console.log(alphanumeric("__wS08g lT    dLg3WE9yY"));
