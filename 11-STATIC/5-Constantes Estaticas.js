// Creacion de constantes estaticas

class Persona {
    static contadorPersonas = 0;

    // Este metodo funciona como una const
    static get MAX_OBJ(){
        return 5;
    }

    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        if(Persona.contadorPersonas < Persona.MAX_OBJ){
            this._idPersona = ++Persona.contadorPersonas;
        }
        else{
            console.log('Se han superado el máximo de objetos permitidos.')
        }
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

let persona2 = new Persona('Gedomias', 'Yamete');
console.log(persona2.toString());
let persona3 = new Persona('Gedomies', 'Yamete');
console.log(persona3.toString());
let persona4 = new Persona('Gedomis', 'Yamete');
console.log(persona4.toString());

// Al crear este 6to objeto, en consola nos indica que se superó el limite de objetos permitidos
let persona5 = new Persona('Gedomios', 'Yamete');