// Constructor de Objetos - Se recomienda que estos empiecen con Mayuscula
function Persona(nombre1, apellido1, email1){ // Creamos una funcion y pasamos las propiedades como parametros
    this.nombre = nombre1;
    this.apellido = apellido1;
    this.email = email1;
}

// Creacion del Objeto Padre en memoria con new
let padre = new Persona('Gedomi', 'Onichan', 'tilininsano@gmail.com'); // Persona ahora es un método
// Impresion del Objeto
console.log(padre); // Resultado: El objeto completo
// Modificacion de la propiedad en padre
padre.nombre = 'Tilin';
console.log(padre.nombre) // Resultado: Cambio de Gedomi a Tilin

// Creacion del Objeto Madre en memoria con new
let madre = new Persona('Yamete', 'Kudasai', 'nyaa@gmail.com');
// Impresion del Objeto
console.log(madre); // Resultado: El objeto completo



