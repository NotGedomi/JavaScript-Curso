// Atributos Estaticos VS No Estaticos en JS

class Persona {
    static contadorPersonas = 0;

    email = 'Valor Default'; 

    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        this._idPersona = ++Persona.contadorPersonas; // Almacenamos en una variable idPersona unico, el contador 
    }

    nombreCompleto(){
        return `${this._idPersona}: ${this._nombre} ${this._apellido}`
    }

    toString(){
        return this.nombreCompleto();
    }
}

// Impresion y prueba del atributo static
let persona1 = new Persona('Gedomi', 'Yamete');
console.log(persona1.toString()); // Resultado: 1: Gedomi Yamete

let empleado1 = new Persona('Tilin', 'Insano');
console.log(empleado1.toString()); // Resultado: 2: Tilin Insano


