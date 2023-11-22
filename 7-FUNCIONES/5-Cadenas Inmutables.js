// Cadenas Inmutables: No se puede modificar su valor

function cambiarValor(parametro){
    parametro = "Adios";
    console.log(parametro);
}
let arg = "Hola";
console.log(arg); // Resultado: Hola
cambiarValor(arg);
console.log(arg); // Sigue siendo Hola, ya que es un dato primitivo, por lo tanto se pasa como Valor


// PERO SI MODIFICAMOS EL VALOR DE LA VARIABLE O USAMOS UN RETURN SI SE PODRÍA
function cambiarValor1(parametro1){
    parametro1 = "Esta es la respuesta con RETURN";
    return parametro1;
}
let arg1 = "Hola";
console.log(arg1); // Resultado: Hola
arg1 = "Esta es la respuesta cambiando el valor de la variable";
console.log(arg1); // Resultado: Esta es la respuesta cambiando el valor de la variable
arg1 = cambiarValor1(arg1); // Almacenamos el valor que se devuelve de la funcion en la variable
console.log(arg1); // Resultado: Esta es la respuesta con RETURN