// Acceso a propiedades de un Object

let persona = {
    nombre: 'Gedomi',
    apellido: 'Onichan'
}

// Forma 1
console.log(persona.nombre); // Resultado: Gedomi
// Forma 2
console.log(persona['nombre']); // Resultado: Gedomi

// Recorrer un object con for in
for(x in persona) {
    console.log(x); // Resultado: nombre, apellido
    console.log(persona[x]); // Resultado: Gedomi, Onichan
}

