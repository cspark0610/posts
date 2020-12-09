/*Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.
*/
function maskify(str){

let newStr="";

if(str.length > 4){
    for(let i=0 ; i <str.length-4; i++){
        newStr += "#";
    }
    for(let i= str.length-4; i<str.length; i++){
        newStr += str[i];
    }
    return (newStr);
}else {
    return str;
}

}

maskify("4556364607935616") //== "############5616"
/*
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""
*/