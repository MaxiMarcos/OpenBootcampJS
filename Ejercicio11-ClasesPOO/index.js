class Estudiante {

    nombre = "Maxi";
    asignatura = ["Javascript", "HTML", "CSS"];

    obtenDatos() {
        return {
            nombre: this.nombre,
            asignatura: this.asignatura
        }
    }
}


const instancia = new Estudiante();
console.log(instancia.obtenDatos());