/*Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
*/

function expandedForm(num){


    let arr=(String(num).split('').map(a=> parseInt(a))); //

    let str="";
    let contador = 0; 
    for(let i=0; i<arr.length;i++){
    
        if(arr[i] !==0){
            str += String(arr[i]);
            
            for( let j=1; j<arr.length-i; j++){
                str += "0";                 
            } 
            
            (contador >= arr.length-1) ? str +="" : str +=" + ";    
            
        }
    contador++;
    
    }
return str;

}
expandedForm(7000);