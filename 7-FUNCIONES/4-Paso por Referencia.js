/*
Paso por Referencia en JS: Se pasa la referencia en memoria del argumento(Si modifica el original), por eso es PASO POR REFERENCIA.
Al pasar informacion compleja como arrays(Arreglos) por ejemplo, normalmente se pasa como referencia.
*/

function cambiarValor(parametro){
    parametro[0] = 20; // El valor para el indice 0 del arreglo en la funcion es: 20
    console.log(parametro[0]); // Resultado: 20
}

let arreglo = [10]; 
console.log(arreglo[0]); // Antes de llamar a la funcion, el valor del indice 0 del arreglo es: 10 
cambiarValor(arreglo);
console.log(arreglo[0]); // Luego de llamar a la funcion, el valor del indice 0 del arreglo si se modifica, por lo tanto el valor es: 20