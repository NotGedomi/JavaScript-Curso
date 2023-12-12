// Await espera el resultado de una promesa
// NOTA: Await solo se puede usar dentro de una funcion declarada con async
async function funcionConPromesaYAwait(){
    let miPromise = new Promise(resolve => {
        resolve('Promesa con await');
    });
    console.log(await miPromise)
}

funcionConPromesaYAwait(); // Resultado: Promesa con await

// Usar async con await es mas practico que usar promise con sus metodos .then() y .catch()
