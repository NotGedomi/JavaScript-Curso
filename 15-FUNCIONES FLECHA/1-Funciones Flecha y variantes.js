// Funciones Flecha en JavaScript
// NOTA: EN LAS FUNCIONES FLECHA NO SE APLICA HOISTING 

// Funcion Normal
function miFunction(){
    console.log('Saludos desde funcion normal')
}
miFunction(); // Resultado: Saludos desde funcion normal

// Funcion Anónima asignando a una variable
let miFunctionuwu = function(){
    console.log('Saludos desde funcion anonima')
}
miFunctionuwu(); // Resultado: Saludos desde funcion anonima

// Funcion Flecha (con const o let)
const miFunctionFlecha = () => {
    console.log('Saludos desde funcion flecha')
}
miFunctionFlecha(); // Resultado: Saludos desde funcion flecha

// Variantes de la Funcion Flecha
// => Variante 1
const miFunctionFlecha1 = () => console.log('Saludos desde funcion Flecha1');
miFunctionFlecha1(); // Resultado: Saludos desde funcion flecha1

// => Variante 2
const saludar = () => {
    return 'Saludos';
}
console.log(saludar()); // Resultado: Saludos

// => Variante 3
const saludar2 = () => 'Saludos2';
console.log(saludar2()); // Resultado: Saludos2

// => Variante 4
const regresarObjeto = () => ({nombre: 'Tilin', apellido: 'Insano'});
console.log(regresarObjeto()); // Resultado: {nombre: 'Tilin', apellido: 'Insano'}

// => Variante 5
const functionConParametros = (mensaje) => console.log(mensaje);
functionConParametros('Saludos con parametros'); // Resultado: Saludos con parametros

// => Variante 6 - Si son varios parametros, recomendable usar "{}" en el cuerpo
const funcionConParametros = (num1, num2) => num1 + num2;
console.log(funcionConParametros(4,5)); // Resultado: 9