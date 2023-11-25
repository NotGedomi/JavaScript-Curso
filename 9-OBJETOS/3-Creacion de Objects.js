// Creacion de un OBJECT

// FORMA 1: SINTAXIS LITERAL
let persona = {
    nombre: 'Gedomi',
    apellido: 'Onichan'
}
console.log(persona.nombre); // Resultado: Gedomi



// FORMA 2 V1: FUNCION CONSTRUCTORA CON PALABRA NEW (ANTIGUO)
function persona1v1 (nombrePerson,apellidoPerson) {
    this.nombre = nombrePerson;
    this.apellido = apellidoPerson;
}
let user1 = new persona1v1('Gedomi','Onichan');
console.log(user1.nombre); // Resultado: Gedomi



// FORMA 2 V2: FUNCION CONSTRUCTORA CON PALABRA NEW (MODERNO)
class persona1v2 {
    constructor(nombrePerson, apellidoPerson) {
        this.nombre = nombrePerson;
        this.apellido = apellidoPerson;
    }
}
let user2 = new persona1v2('Gedomi','Onichan');
console.log(user2.nombre); // Resultado: Gedomi



// FORMA 3: CONSTRUCTOR OBJECT CON PALABRA NEW
let persona2 = new Object();
persona2.nombre = 'Gedomi';
persona2.apellido = 'Onichan';
console.log(persona2.nombre); // Resultado: Gedomi



// FORMA 4: USANDO NOMBRES DE PROPIEDAD ABREVIADOS
let nombre = 'Gedomi';
let apellido = 'Onichan';
let persona3 = {
    nombre,
    apellido
}
console.log(persona3.nombre); // Resultado: Gedomi



// FORMA 5: CON NOTACION DE CORCHETES
let nombreParam = 'nombre';
let nombreValor = 'Gedomi';
persona[nombreParam] = nombreValor;
console.log(persona.nombre); // Resultado: Gedomi