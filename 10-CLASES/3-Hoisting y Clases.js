// Hoisting y Clases en JS: En class no es valido el hoisting

let persona1 = new Persona('Gedomi', 'Kun'); // Resultado: Cannot access 'Persona' before initialization

// Ahora si Definimos la clase Persona
class Persona {
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
// Creacion de nuestro metodo get
    get nombre(){
        return this._nombre;
    }
// Creacion de nuestro set
    set nombre(nombre){
        this._nombre = nombre;
    }
}

let persona2 = new Persona('Gedomi', 'Kun'); // Ya no nos salta error