// Uso de promesas, await, async y setTimeout
async function FunctionWithPromiseAwaitTimeout(){
    myPromise = new Promise (resolver => setTimeout(() => {resolver('Promesa con await y timeout'), 3000}));
    console.log(await myPromise);
}

FunctionWithPromiseAwaitTimeout(); // Resultado: Promesa con await y timeout