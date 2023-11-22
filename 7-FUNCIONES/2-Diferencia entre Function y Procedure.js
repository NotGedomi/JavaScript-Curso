// Diferencia entre Procedimieto y Funcion

// Procedimiento: No retorna ningun valor
function imprimir(param) {
    console.log(param);
}
imprimir(90);

// Funcion: Si retorna un valor
function sumar(a,b){
    let result = a + b;
    return result;
}
let num1 = 4, num2 = 5, c; // Definimos variables
c = sumar(num1,num2); // Capturamos resultado de la funcion sumar con el valor retornado
console.log(c); // Imprimimos resultado: 9