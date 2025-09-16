class Producto {
  #precio; 

  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio; 
  }

  get precio() {
    return this.#precio;
  }

  set precio(v) {
    if (typeof v !== 'number' || v < 0) {
      throw new Error('El precio debe ser un número >= 0');
    }
    this.#precio = v;
  }
}

class ItemPedido {
  constructor(producto, cantidad = 1) {
    if (!(producto instanceof Producto)) {
      throw new Error('item requiere un Producto válido');
    }
    if (!Number.isInteger(cantidad) || cantidad <= 0) {
      throw new Error('la cantidad debe ser un entero > 0');
    }
    this.producto = producto;
    this.cantidad = cantidad;
  }

  get subtotal() {
    return this.producto.precio * this.cantidad;
  }
}

class Pedido {
  constructor() {
    this.items = []; 
  }

  agregar(producto, cantidad = 1) {
    
    const existente = this.items.find(i => i.producto.nombre === producto.nombre);
    if (existente) {
      existente.cantidad += cantidad;
    } else {
      this.items.push(new ItemPedido(producto, cantidad));
    }
  }

  quitar(nombreProducto) {
    this.items = this.items.filter(i => i.producto.nombre !== nombreProducto);
  }

  listar() {
    if (this.items.length === 0) {
      console.log('Pedido vacío');
      return;
    }
    this.items.forEach(i => {
      console.log(`- ${i.producto.nombre} x${i.cantidad} = ${i.subtotal}`);
    });
    console.log(`TOTAL: ${this.total}`);
  }

  get total() {
    return this.items.reduce((acc, i) => acc + i.subtotal, 0);
  }
}

const manzana = new Producto('manzana', 1200);
const pan = new Producto('pan', 2500);

const pedido = new Pedido();
pedido.agregar(manzana, 3); 
pedido.agregar(pan, 2);     
pedido.agregar(manzana, 1); 

pedido.listar();
pedido.quitar('pan');
console.log('Luego de quitar pan:');
pedido.listar();
