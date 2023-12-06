// Metodos Get y Set en JS
// Nota: Se recomienda que para usar get y set, las propiedades tengan un "_" antes del nombre
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

// Creación de objetos en base a plantilla Class Persona
let persona1 = new Persona('Gedomi', 'Onichan');

// Imprimimos el resultado al usar el metodo get nombre
console.log(persona1.nombre); // Resultado: Gedomi

// Usamos el metodo set nombre para modificar el valor
persona1.nombre = 'Gedomis';
console.log(persona1.nombre); // Resultado: Gedomis