/*
Paso por Valor en JS: Se pasa solo una copia del argumento(No modifica el original), por eso es PASO POR VALOR.
Pasamos información de tipo primitivo (number, bool, string..)
*/

function cambiarValor(parametro){
    parametro = 20; // Al pasarse por valor, el nuevo valor 20 solo es valido dentro del cuerpo de la funcion
    console.log(parametro); // Resultado: 20, pero solo dentro de la funcion
}

let arg = 10; // Valor de 10 
cambiarValor(arg);
console.log(arg); // Resultado: 10, ya que el argumento solo se pasó por valor a la funcion, por lo que el valor de 20 no afecta al valor fuera de la funcion