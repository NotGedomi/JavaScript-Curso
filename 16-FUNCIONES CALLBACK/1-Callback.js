// Callback: funcion que se pasa como parametro a otra funcion, llamandola en esta
// NOTA: Son muy utiles para procesos asincronos, es decir que se ejecuten por separado en vez de linea a linea

// Flujo sin Callback
function miFunction1(){
    console.log('Funcion 1');
}

function miFunction2(){
    console.log('Funcion 2');
}

miFunction1();
miFunction2();

// Flujo con Callback
function imprimir(mensaje){ // Creamos una funcion para imprimir un mensaje
    console.log(mensaje);
}

function sumar(op1,op2,functionCallback){ // Creamos una funcion sumar con un parametro adicional para pasar la funcion imprimir
    let suma = op1 + op2; // Una pequeña operacion
    functionCallback(`El resultado es: ${suma}`); // Llamamos a la funcion imprimir y le pasamos como argumento el resultado de la operacion 
}

sumar(5,6,imprimir); // Pasamos los argumentos y la funcion imprimir como argumento tambien

