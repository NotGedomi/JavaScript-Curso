// Formas de imprimir un Objects

let persona = {
    nombre: "Gedomi",
    apellido:"Onichan"
}

// Con concatenacion
console.log(persona.nombre + ', ' + persona.apellido); // Resultado: Gedomi, Onichan

// Con For in
for (propiedad in persona){
    console.log(persona[propiedad]); // Resultado: Gedomi, Onichan
}

// Con Object.values
let personaArreglo = Object.values(persona);
console.log(personaArreglo) // Resultado: ['Gedomi', 'Onichan']
console.log(personaArreglo[0] + ' ' + personaArreglo[1]); // Resultado: Gedomi Onichan

// Con Stringify
let personaString = JSON.stringify(persona);
console.log(personaString); // Resultado: {"nombre":"Gedomi","apellido":"Onichan"}