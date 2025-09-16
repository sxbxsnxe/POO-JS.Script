class Estudiante {
    constructor(nombre, materias) {
        this.nombre = nombre;
        this.materias = materias;
    }

    listarMaterias() {
        console.log(`materias de ${this.nombre}:`);
        this.materias.forEach(m => console.log("- " + m));
    }
}

const e1 = new Estudiante("jorge", ["cibersecurity", "Ing aeroespacial", "programación"]);
e1.listarMaterias()