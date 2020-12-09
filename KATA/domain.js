/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
*/
function domainName(str){

let arr = str.split('');
    //case http: 
    if(arr[4]==":"){
        if(arr[7]=="w"){
            let dotIndex = (arr.slice(11)).indexOf('.');
            let final = (arr.slice(11)).splice(0,dotIndex);
            return final.join('');
        }else{ // si no empieza con www
            let dotIndex = (arr.slice(7)).indexOf('.');
            let final = (arr.slice(7)).splice(0,dotIndex);
            return final.join('');
        }

    } else if(arr[4]=='s'){ 
        if(arr[8]=='w'){
            let dotIndex = (arr.slice(12)).indexOf('.');
            let final = (arr.slice(12)).splice(0,dotIndex);
            return final.join('');
        }else{
            let dotIndex = (arr.slice(8)).indexOf('.');
            let final = (arr.slice(8)).splice(0,dotIndex);
            return final.join('');
        }

    }else if(arr[3]=='.'){
            let dotIndex = (arr.slice(4)).indexOf('.');
            let final = (arr.slice(4)).splice(0,dotIndex);
            return final.join('');
        }else{
            let dotIndex = arr.indexOf('.');
            let final = arr.splice(0,dotIndex);
            return final.join('');
        }

}
domainName("wgbt0v5r7vqxxz1re8mq4d.tv/error") 

//== "zombie-bites"
//domainName("https://www.cnet.com") == "cnet"
//domainName("http://github.com/carbonfive/raygun") //== "github"
//"www.xakep.ru"), "xakep"

//wgbt0v5r7vqxxz1re8mq4d.tv/error
