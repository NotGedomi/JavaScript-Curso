// Metodo Call en JS: Nos permite llamar un metodo definido de un Object a otro
let persona1 = {
    nombre: 'Gedomi',
    apellido: 'Onichan',
    nombreCompleto: function(){
        return `${this.nombre} ${this.apellido}`   
    }
}

let persona2 = {
    nombre: 'Aura',
    apellido: 'Bebeuwu'
}

// Uso de Call para usar el metodo nombreCompleto del Objeto persona1 con datos del objeto persona2
console.log(persona1.nombreCompleto()); // Resultado: Gedomi Onichan
console.log(persona1.nombreCompleto.call(persona2)); // Resultado: Aura Bebeuwu


