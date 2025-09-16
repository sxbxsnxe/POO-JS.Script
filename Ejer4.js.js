class Persona {
    constructor(id, nombre, correo) {
        this.id = id;
        this.nombre = nombre;
        this.correo = correo;
    }
}

class Aprendiz extends Persona {
    constructor(id, nombre, correo, puntajeIcfes) {
        super(id, nombre, correo);
        this.puntajeIcfes = puntajeIcfes;
    }

    info() {
        console.log(`Aprendiz:
    ID: ${this.id}
    Nombre: ${this.nombre}
    Correo: ${this.correo}
    Puntaje ICFES: ${this.puntajeIcfes}`);
    }
}

class Instructor extends Persona {
    constructor(id, nombre, correo, especialidad) {
        super(id, nombre, correo);
        this.especialidad = especialidad;
    }

    info() {
        console.log(`instructor:
    ID: ${this.id}
    Nombre: ${this.nombre}
    Correo: ${this.correo}
    Especialidad: ${this.especialidad}`);
    }
}

const aprendiz1 = new Aprendiz(1, "jorge", "jorgeclm@mail.com", 350);
aprendiz1.info();

const instructor1 = new Instructor(2, "Marta", "marta@mail.com", "algebr");
instructor1.info();

class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    sonido() {
        console.log(`${this.nombre} hace un sonido.`);
    }
}

class Perro extends Animal {
    sonido() {
        console.log(`${this.nombre} ladra: ¡Guau!`);
    }
}

class Gato extends Animal {
    sonido() {
        console.log(`${this.nombre} maúlla: ¡Miau!`);
    }
}

const perro1 = new Perro("Firulais");
perro1.sonido();

const gato1 = new Gato("Michi");
gato1.sonido();
