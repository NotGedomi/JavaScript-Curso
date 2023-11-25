// Agregar o eliminar propiedades de un Object

let persona = {
    nombre: 'Gedomi',
    apellido: 'Onichan'
}

// Añadir una propiedad
persona.apodo = 'Tilin';
console.log(persona.apodo); // Resultado: Tilin

// Modificar una propiedad
persona.apellido = 'Insano';
console.log(persona.apellido); // Resultado: Insano

// Eliminar una propiedad
delete persona.apodo;
console.log(persona.apodo); // Resultado: undefined (no existe en el objeto)