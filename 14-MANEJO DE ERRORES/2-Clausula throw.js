// Clausula Throws: util para arrojar nuestros propios errores 
'use strict';

try{
    let x = '';
    // Ejemplo de uso de throw para crear tu propio error
    if(isNaN(x)) throw 'No es un Numero';
    else if( x === '') throw 'Es cadena vacia';
}
catch(error){
    console.log(error); // Resultado: Es cadena vacia
    // Otros tipos de error con nombre y mensaje
    // console.log(error.name); <---
    // console.log(error.message); <---
}
finally{ // Este bloque siempre se ejecuta
    console.log('Termina la revisión de errores'); // Termina la revisión de errores
}

// Al usar strict y no haber primer declarado la variable, no continuan las siguientes lineas de código a menos que usemos un try catch
console.log('Continuamos...'); // Resultado: Continuamos
