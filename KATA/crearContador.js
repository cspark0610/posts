function crearContador(contador=0){

    let obj;
    obj.incrementar = function (){
        contador += 1;
        return contador
    }
    obj.decrementar = function(){
        contador -= 1;
        return contador;
    }
    obj.obtenerValor = function(){
        return contador;
    }

    return obj;
}

var contador1 = crearContador(5);
var contador2 = crearContador(500);