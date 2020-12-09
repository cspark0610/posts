/*
What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false
Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
*/



function anagrams(str, array){


    function isAnagram(str1,str2){

    let obj1={}
    let obj2={}

    str1.split('').map(item => obj1[item]= obj1[item]+1 || 1);
    str2.split('').map(item => obj2[item]= obj2[item]+1 || 1);

    let arrValues1 = [...Object.values(obj1)].sort((a,b)=>a-b);
    let arrValues2 = [...Object.values(obj2)].sort((a,b)=>a-b); 
    let arrKeys1 = [...Object.keys(obj1)].sort()
    let arrKeys2 = [...Object.keys(obj2)].sort()


    function arrayEquals(a, b) {
    return   Array.isArray(a) &&
             Array.isArray(b) &&
            a.length === b.length &&
            a.every((val, index) => val === b[index]);
    }

    return (arrayEquals(arrValues1,arrValues2) && arrayEquals(arrKeys1,arrKeys2) ? true : false);
    }


let resultado=[];
    for(let item of array){
        if(isAnagram(item,str)===true){
            resultado.push(item)
        }
    }
return resultado;
}
console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) );

/*
function anagrams(word, words) {
  word = word.split('').sort().join('');
  return words.filter(function(v) {return word == v.split('').sort().join('');});
}
console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) );
*/
