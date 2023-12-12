// Async indica que una funcion regresa una promesa
async function miFunctionConPromesa(){
    return 'Saludos con promesa y async'
}

miFunctionConPromesa().then(valor => console.log(valor)); // Resultado: Saludos con promesa y async
