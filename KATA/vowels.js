function vowels(str){

let contador=0;
for(let j=0 ; j<str.length; j++){
let vowel= str[j]
    switch(vowel){
        case 'a': contador++;
        break
        case 'e': contador++;
        break
        case 'i': contador++;
        break
        case 'o': contador++;
        break
        case 'u': contador++;
        break
    }
}
console.log(contador);
}
vowels('gigaset')