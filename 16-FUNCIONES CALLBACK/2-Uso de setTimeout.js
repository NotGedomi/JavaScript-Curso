// Llamadas Asincronas con setTimeout

function miFuncionCallback(){
    console.log('Saludo asíncrono despues de 3 seg');
}

// Llamada con setTimeout y una duracion en milisegundos
// Estructura: setTimeout(funcion o parametro, tiempo en milisegundos);
setTimeout(miFuncionCallback,3000); // Despues de 3 seg

// setTimeout con funcion flecha
setTimeout(() => console.log('Saludo con funcion flecha despues de 2 seg'), 2000);