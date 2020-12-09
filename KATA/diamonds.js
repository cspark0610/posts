/*
Task
You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

Examples
A size 3 diamond:

 *
***
 *
...which would appear as a string of " *\n***\n *\n"
*/

function diamond(n){

function linea(num){
    let str="";

  
//1 agrego espacios delante del *
    for(let cont=0; cont < Math.floor((n-num)/2); cont++){
        str +=" ";
    }
//2agregar los * necesarios
    for(let i=1; i<=num;i++){
        str += "*";    
    }
    //3 agrego el salto de linea final.
    str+= "\n";
    console.log(str);
    return str;
} 


let diam="";    
    if(n<0 || n%2===0){
        return null;
    }else if(n%2 !==0){
        
        for(let i=1; i<= n ; i+=2){
           diam += linea(i);             
        }
       
        for(let j=n-2; j>=1; j-=2){ 
           diam += linea(j);
        }    
    }
return diam;
}
diamond(9);
