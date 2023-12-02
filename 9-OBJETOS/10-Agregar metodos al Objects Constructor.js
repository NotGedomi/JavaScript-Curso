// Agregar Metodos a un Constructor de Objetos
// NOTA: Un metodo es una funcion que opera la informacion de un Objeto.

function Persona1(nombre1, apellido1, email1){
    this.nombre = nombre1;
    this.apellido = apellido1;
    this.email = email1;
    this.nombreCompleto = function(){
        return `${this.nombre} ${this.apellido}`;
    }
}

let padre = new Persona1('Gedomi','Onichan','gedo@gmail.com');
// Nota: Recordar que al imprimir funciones, debes usar "()" el paréntesis.
console.log(padre.nombreCompleto()); // Resultado: Gedomi Onichan