class Autor {
    constructor(nombre) {
    this.nombre = nombre;
    this.libros = [];
    }
    agregarLibro(libro) {
    this.libros.push(libro);
    }
}

class Editorial {
    constructor(nombre) {
    this.nombre = nombre;
    this.libros = [];
    }
    agregarLibro(libro) {
    this.libros.push(libro);
    }
}

class Libro {
    constructor(titulo, anio, autor, editorial) {
    if (!(autor instanceof Autor)) throw new Error('autor inválido');
    if (!(editorial instanceof Editorial)) throw new Error('editorial inválida');
    this.titulo = titulo;
    this.anio = anio;
    this.autor = autor;
    this.editorial = editorial;

    autor.agregarLibro(this);
    editorial.agregarLibro(this);
    }

    info() {
    return `${this.titulo} (${this.anio}) — ${this.autor.nombre}, ${this.editorial.nombre}`;
    }
}


const garcia = new Autor('García Márquez');
const sudamericana = new Editorial('Editorial Sudamericana');

const cienAnos = new Libro('Cien años de soledad', 1967, garcia, sudamericana);
const elColonel = new Libro('El coronel no tiene quien le escriba', 1961, garcia, sudamericana);

console.log(cienAnos.info());
console.log('Libros de García Márquez:', garcia.libros.map(l => l.titulo));
console.log('Catálogo de Sudamericana:', sudamericana.libros.map(l => l.titulo));
