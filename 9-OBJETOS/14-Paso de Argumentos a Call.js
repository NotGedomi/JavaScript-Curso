// Paso de Argumentos a Call en JS
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

console.log(persona1.nombreCompleto('Usuario', '987654322')); // Resultado: Usuario: Gedomi Onichan, 987654322

// Uso del Call con parametros
console.log(persona1.nombreCompleto.call(persona2, 'Informacion', '987654321')); // Resultado: Informacion: Aura Gogogo, 987654321