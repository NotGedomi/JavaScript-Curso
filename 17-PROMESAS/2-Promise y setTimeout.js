/*Promesas
Vamos a trabajar con funcion flecha
ESTRUCTURA: new Promise ((parametro correcto, parametro rechazado)) => {
    cuerpo de codigo;
}
*/
// CON FUNCION FLECHA
let miPromesa1 = new Promise((resolver) => {
    setTimeout(() => resolver('Saludos con promesa y timeOut'), 3000);
});

miPromesa1.then(valor => console.log(valor)); // Se llama resolver y se imprime el mensaje

// NOTA: TAMBIEN PUEDES TRABAJAR CON PROMESAS ENCADENADAS, LLAMAR UNA DENTRO DE OTRA