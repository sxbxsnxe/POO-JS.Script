class Empleado {
    #sueldo;

    constructor(nombre, sueldo, correo) {
        this.nombre = nombre;
        this.#sueldo = sueldo;
        this._correo = null; 
        this.correo = correo;
    }

    aplicarAumento(porcentaje) {
        if (porcentaje > 0) {
            this.#sueldo += this.#sueldo * (porcentaje / 100);
        }
    }

    get sueldo() {
        return this.#sueldo;
    }

    get correo() {
        return this._correo;
    }

    set correo(value) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (regex.test(value)) {
            this._correo = value;
        } else {
            console.log("Correo inválido, no se asignó.");
        }
    }

    info() {
        console.log(`Empleado:
    Nombre: ${this.nombre}
    Sueldo: ${this.#sueldo}
    Correo: ${this._correo}`);
    }
}

const emp1 = new Empleado("Carlos", 2000, "carlos@mail.com");
emp1.info();

emp1.aplicarAumento(10);
console.log("Después del aumento:");
emp1.info();

emp1.correo = "correo_mal_formato";
emp1.correo = "nuevo@mail.com";
emp1.info();
