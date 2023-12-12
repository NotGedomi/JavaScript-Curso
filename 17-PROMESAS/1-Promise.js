/*Promesas
Vamos a trabajar con funcion flecha
ESTRUCTURA: new Promise ((parametro correcto, parametro rechazado)) => {
    cuerpo de codigo;
}
*/

// CON FUNCION FLECHA
let miPromesa1 = new Promise((resolver,rechazar) => {
    let expresion = true; // Simulamos caso verdadero
    if(expresion){
        resolver('Resolvio correcto');
    }
    else{
        rechazar('Se produjo un error');
    }
});

// Usando .then()
miPromesa1.
then(
    correcto => console.log(correcto),
    error => console.log(error)
);
// Usando .catch() separado de .then()
miPromesa1
.then(correcto => console.log(correcto))
.catch(error => console.log(error));



// SIN FUNCION FLECHA
let miPromesa2 = new Promise(function(resolver, rechazar) {
    let expresion = false; // Simulamos caso FALSO
    if(expresion){
        resolver('Resolvio correcto');
    }
    else{
        rechazar('Se produjo un error');
    }
});
// Usando .then()
miPromesa1.
then(
    function(correcto) { console.log(correcto); },
    function(error) { console.log(error); }
);
// Usando .catch() separado de .then()
miPromesa1
.then(function(correcto) { console.log(correcto); })
.catch(function(error) { console.log(error); });

