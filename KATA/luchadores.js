/*
Una academia dedicada a las difíciles artes de lucha oriental, está organizando un torneo de luchadores sumo. A los efectos de conformar la grilla de combates, es necesario armar parejas de luchadores que puedan ofrecer un espectáculo atractivo. Como es sabido que los cultores de esta disciplina son hombres de estructura física imponente, los organizadores habitualmente arman duplas de combatientes estableciendo comparaciones relativas a sus alturas y pesos. Por experiencia, los organizadores saben que un combatiente ‘domina’ a otro si lo supera en ambas medidas, o bien si lo iguala en peso y lo supera en altura, o viceversa. En cualquier otro caso, los luchadores no son comparables lo que hace el resultado imprevisible y por lo tanto más atractivo para el público. Sabiendo que no hay luchadores que coinciden en ambas medidas, los organizadores quieren saber a cuantos posibles contrincantes domina cada uno de ellos, y por esta razón se te pide que escribas un programa que efectúe este recuento. Datos de entrada Se recibe una lista de luchadores donde se indica el peso y la altura de cada uno. Se debe generar una salida conteniendo L líneas con la cantidad de luchadores a quienes domina cada participante, en el mismo orden en el que los participantes entraron.*/

let luchadores=[
{numero:1,  peso:300, altura:150},
{numero:2,  peso:320, altura:150},
{numero:3,  peso:299, altura:158},
{numero:4,  peso:330, altura:169},
{numero:5,  peso:330, altura:154},
{numero:6,  peso:339, altura:150},
{numero:7,  peso:298, altura:170},
{numero:8,  peso:344, altura:157},
{numero:9,  peso:276, altura:167},
{numero:10, peso:289, altura:149},
];

function recuento(array){
    
for(let i=0 ; i<array.length;i++){

    let contador = 0;// empieza en cero para cada luchador[i]['numero']

    for(j=0; j<array.length;j++){

    if(array[i]['peso'] > array[j]['peso'] && array[i]['altura'] > array[j]['altura'] ){
        contador++;
    }else if(array[i]['peso'] > array[j]['peso'] && array[i]['altura']=== array[j]['altura']){
        contador++;
    }else if(array[i]['peso']===array[j]['peso'] && array[i]['altura'] > array[j]['altura'] ){
        contador++;
    } else{
        contador 
    }
    }
console.log(`EL LUCHADOR ${luchadores[i]['numero']} DOMINA A ${contador} contrincantes`);
}
}
console.log(recuento(luchadores));