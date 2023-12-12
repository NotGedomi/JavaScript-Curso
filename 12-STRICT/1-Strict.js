/* MODO STRICT:
El modo estricto en JavaScript, también conocido como "use strict",
es una característica que permite a los desarrolladores escribir código
más seguro y evitar errores comunes al programar. 

Cuando se habilita el modo estricto en JavaScript, se aplican ciertas restricciones
y cambios en la forma en que el código es interpretado por el motor del navegador
o del entorno en el que se está ejecutando.

El modo estricto se puede activar a nivel de script completo o a nivel de funciones individuales.
Para activarlo en todo un script, se debe escribir "use strict" o 'use strict' antes de cualquier 
otra expresión.
*/

"use strict";
// Uso de strict en variables
w = 10;
console.log(w); // Resultado: w is not defined (Se debe definir primero)

let z = 9;
console.log(z); // Resultado: 9

// Uso de strict en funciones
miFuncion1(); // Resultado: miFuncion1 is not defined(Se debe definir primero)


function miFuncion2(){
    let a = 15;
    console.log(a);
}

miFuncion2(); // Resultado: 15



