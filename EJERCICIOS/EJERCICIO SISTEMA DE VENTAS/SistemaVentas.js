// Clase Producto
class Producto{
    static contadorProductos = 0;
    constructor(nombre,precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProducto(){
        return this._idProducto;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get precio(){
        return this._precio;
    }

    set precio(precio){
        this._precio = precio;
    }

    toString(){
        return `
                        => idProducto: ${this._idProducto}
                            nombre: ${this._nombre}
                            precio: S/${this._precio}` 
    }
}

// Clase Orden
class Orden{
    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS(){ // Constante como Metodo
        return 5;
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = []; // Preparamos _productos para recibir elementos como arreglo
    }

    get orden(){
        return this._orden;
    }

    set orden(orden){
        this._orden = orden;
    }

    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto); // Usamos push para añadir el producto
        }
        else{
            console.log('No se pueden agregar mas productos, el inventario esta lleno.')
        }
    }

    calcularTotal(){
        let totalVenta = 0; // Monto inicial de venta total
        // Para recorrer un arreglo de forma simplificada
        for(let producto of this._productos){
            totalVenta += producto.precio; // Se incrementa con cada precio de producto añadido
        }
        // Devuelve el monto total mas reciente de la venta 
        return totalVenta;
    }

    mostrarOrden(){
        let productosOrden = ''; // Cadena vacia inicialmente
        // Recorremos el arreglo de productos
        for (let producto of this._productos){
            productosOrden += producto.toString() + ' '; // Se añade cada producto a detalle como string
        }
        // Imprimimos el total del detalle de la orden
        console.log(`Orden: ${this._idOrden}
                    Total: S/${this.calcularTotal()}
                    Productos: ${productosOrden}`);
    }
}

// Productos Test
let producto1 = new Producto('Pantalon', 900);
let producto2 = new Producto('Tilin Insano', 1);

// Orden Test
let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);

// Mostramos la orden final
orden1.mostrarOrden();