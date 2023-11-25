// Convertir cadena a numero
let a = '10', b = '20';
// Como son strings se concatenan y no se suman
console.log(a+b); // Resultado: 1020

// Por ello convertimos de string a number con 'parse'
let suma = parseInt(a) + parseInt(b); // parseInt: pasar a entero
console.log(suma); // Resultado: 30

