// Operadores Aritmeticos

let a,b,c,e,f,g,h;

// Suma
a = 2 + 5;
console.log(a);

// Resta
b = 5 - 2;
console.log(b);

// Multiplicación
c = 3 * 5;
console.log(c);

// Division
d = 4 / 2;
console.log(d);

// Modulo (Residuo Division)
e = 8 / 3;
console.log(e);

// Potencia
f = 3 ** 5; // (ES 2016)
console.log(f);

f = Math.pow(3,5); // (Antes de ES 2016)
console.log(f);

// Incrementos

 // Pre-Incremento (Primero incrementa la variable y luego devuelve el valor)
let numero1 = 5;
console.log(++numero1); // Muestra 6
console.log(numero1); // Muestra 6
console.log(++numero1); // Muestra 7
console.log(numero1); // Muestra 7

// Post-Incremento (Primero devuelve el valor de la variable y luego incrementa la variable)
let numero2 = 5;
console.log(numero2++); // Muestra 5
console.log(numero2); // Muestra 6
console.log(numero2++); // Muestra 6
console.log(numero2); // Muestra 7

// Decrementos

// Pre-Decremento (Primero decrementa la variable y luego devuelve el valor)
let numero3 = 5;
console.log(--numero3); // Muestra 4
console.log(numero3); // Muestra 4
console.log(--numero3); // Muestra 3
console.log(numero3); // Muestra 3

// Post-Decremento (Primero devuelve el valor de la variable y luego decrementa la variable)
let numero4 = 5;
console.log(numero4--); // Muestra 5
console.log(numero4); // Muestra 4
console.log(numero4--); // Muestra 4
console.log(numero4); // Muestra 3