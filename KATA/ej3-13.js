function mediaClase(){
let a = Number(prompt('CUANTOS ALUMNOS HAY EN LA CLASE?'));
let contadorAlumno =0;
let acumPromedios = 0;
    while(contadorAlumno < a){
        let contadorNota = 0;
        let sumaNotas = 0;
        let n = Number(prompt(`cuantas notas tiene el alumno ${contadorAlumno} ?`));
            while(contadorNota < n) {
                let nota = Number(prompt('cual/es es/son la/s nota/s del alumno?'));
                    sumaNotas += nota;

                contadorNota++;
            }
        let promedioAlumno = sumaNotas / n;
        console.log(promedioAlumno);     
            acumPromedios += promedioAlumno;
        contadorAlumno++;
    }
console.log(acumPromedios / a);
return (acumPromedios/a);
}
mediaClase(); 