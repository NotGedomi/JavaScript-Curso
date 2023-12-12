// Bloques Try, Catch and Finally
'use strict';

try{
    x = 10;
}
catch(error){
    console.log(error); // Error de Referencia: x is not defined
}
finally{
    console.log('Termina la revisión de errores'); // Termina la revisión de errores
}

// Al usar strict y no haber primer declarado la variable, no continuan las siguientes lineas de código a menos que usemos un try catch
console.log('Continuamos...'); //
