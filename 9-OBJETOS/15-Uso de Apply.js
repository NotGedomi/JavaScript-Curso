// Metodo Apply en JS
// NOTA: A diferencia de call(), el método apply() toma un array de argumentos.
let persona1 = {
    nombre: 'Gedomi',
    apellido: 'Onichan',
    nombreCompleto: function(titulo, tel){
        return `${titulo}: ${this.nombre} ${this.apellido}, ${tel}`   
    }
}

let persona2 = {
    nombre: 'Aura',
    apellido: 'Gogogo'
}

// Uso de Apply
console.log(persona1.nombreCompleto('Licenciado', '383838383')); // Resultado: Gedomi Onichan
let arreglo = ['Ing','555555555'];
console.log(persona1.nombreCompleto.apply(persona2, arreglo)); // Resultado: Aura Gogogo
