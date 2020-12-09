var prefijos=[54,55,56,57,58];
var paises=['argentina','brasil','chile','colombia','venezuela'];

//generar un objeto desde estos dos arreglos .debera tener como propiedades los numeros de los prefijos telefonicos, y como valor, el pais correspondiente a cada prefijo.

function generarObj(){
    let objeto={};
for(let i=0; i<prefijos.length; i++){

objeto[prefijos[i]]=paises[i];

}

return objeto;
}
generarObj()

function validarPrefijo(str){

let objeto=generarObj(); // key es tipo string y objeto[key] es string
let digitos = (str[0]+str[1]);
console.log(objeto);
console.log(digitos);

  if(objeto[digitos]===undefined){

        console.log(`este numero no pertenece a nuestros paises`);
  }else {
        console.log(`este numero pertenece a ${objeto[digitos]}`);
  }

}
validarPrefijo('8012345678')