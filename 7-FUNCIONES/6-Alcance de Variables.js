// Alcance de Variables(Scope): Tiempo de duracion de una variable dentro de distintos bloques de código
let variableGlobal = 5; // Esta variable global puede ser accedida desde cualquier parte del programa principal
// Modificamos la variableGlobal
variableGlobal = 10;

// Definimos una funcion
function miFuncion(variableLocal){
    console.log(variableLocal);
    variableGlobal = 40; // La variable global esta siendo modificada dentro de la funcion, por lo que su valor cambia luego
}
miFuncion(variableGlobal);
console.log(variableGlobal);


// NOTA: No se puede re definir una variable let, tambien evitamos el hoisting.