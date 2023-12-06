// Clases en JS: Una clase es una plantilla, posee NOMBRE, ATRIBUTOS Y METODOS.
// Nota: Un OBJETO es una instancia de una CLASE.

// Creamos nuestra clase (Buena practica es definir la primera letra con Mayuscula)
class Persona {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

// Creación de objetos en base a plantilla Class Persona
let persona1 = new Persona('Gedomi', 'Onichan');
console.log(persona1); // Resultado: SE IMPRIME TODO EL OBJECT PERSONA1

let persona2 = new Persona('Aura', 'Bebe');
console.log(persona2); // Resultado: SE IMPRIME TODO EL OBJECT PERSONA2
