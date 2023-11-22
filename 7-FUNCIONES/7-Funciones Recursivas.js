/*
// Funciones Recursivas: Funcion que se llama a si misma

REGLAS PARA DEFINIR UNA FUNCION RECURSIVA:
- Se debe llamar a si misma
- Debe avanzar hacia un caso base para evitar un ciclo infinito
*/

// Imprimir numeros del 3 al 1 con Funcion Recursiva
function funcionRecursiva(numero){
    if(numero == 1) {
        console.log(numero) // Resultado final: 1
    }
    else {
        console.log(numero);
        numero-- // Decremento del numero de 1 en 1 hasta llegar al caso base
        funcionRecursiva(numero) // Resultado: 3, 2
    }
}
let number = 3;
funcionRecursiva(number);