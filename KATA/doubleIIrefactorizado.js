var paises = [
    {
        nombre: 'argentina',
    continente: 'sudamerica',
    poblacion: 40000000
    },
    {
        nombre: 'brasil',
    continente: 'sudamerica',
    poblacion: 300000000
    },
    {
        nombre: 'venezuela',
    continente: 'sudamerica',
    poblacion: 25000000
    },
    {
        nombre: 'chile',
    continente: 'sudamerica',
    poblacion: 10000000
    },
    {
        nombre: 'australia',
    continente: 'oceania',
    poblacion: 18000000
    },
    {
        nombre: 'nueva zelanda',
    continente: 'oceania',
    poblacion: 8000000
    },
    {
        nombre: 'china',
    continente: 'asia',
    poblacion: 1000000000
    },
    {
        nombre: 'tailandia',
    continente: 'asia',
    poblacion: 32000000
    },
    {
        nombre: 'vietnam',
    continente: 'asia',
    poblacion: 23000000
    },
    {
        nombre: 'españa',
    continente: 'europa',
    poblacion: 29000000
    },
    {
        nombre: 'alemania',
    continente: 'europa',
    poblacion: 33000000
    },
    {
        nombre: 'francia',
    continente: 'europa',
    poblacion: 65000000
    },
    {
        nombre: 'portugal',
    continente: 'europa',
    poblacion: 4000000
    },
    {
        nombre: 'grecia',
    continente: 'europa',
    poblacion: 12000000
    },
    ];

    function doubleII(){
    
    funcionPaises(paises,'sudamerica',30000000);
    funcionPoblaciones(paises,'sudamerica',30000000);
    return console.log(ObjetoFinal(funcionPaises(paises,'sudamerica',30000000),funcionPoblaciones(paises,'sudamerica',30000000)));
    }
    doubleII();

function funcionPaises(arraydeObj,continente,numero){
    let array=[];
    for(let i =0; i<arraydeObj.length; i++){
    if(arraydeObj[i]['continente']===continente && arraydeObj[i]['poblacion'] >= numero){
        array.push(arraydeObj[i]['nombre']);
            }
        }
        return array;
    }

function funcionPoblaciones(arraydeObj,continente,numero){
        let arraydePoblaciones=[];
        for(let i =0; i<arraydeObj.length; i++){
            if(arraydeObj[i]['continente']===continente && arraydeObj[i]['poblacion'] >= numero) {       
            arraydePoblaciones.push(arraydeObj[i]['poblacion']);
        }
    }
        return arraydePoblaciones;
    }

    function ObjetoFinal(param1,param2){
        let objFinal={};
        objFinal['nombres']=param1;
        objFinal['poblacion total']=param2.reduce((a,b)=>a+b)
        return objFinal;
    }