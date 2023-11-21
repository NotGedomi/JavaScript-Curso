// Valor dentro de rango
let min = 2;
let max = 5;

// Valor a evaluar en el rango
let dato1 = 3;
let dato2 = 1;

// Evaluamos y almacenamos el resultado en una variable
let valor_dato1 = dato1 >= min && dato1 <= max;
let valor_dato2 = dato2 >= min && dato2 <= max;
console.log(`¿El valor 1 esta dentro del rango?: ${valor_dato1}`); // Verdadero
console.log(`¿El valor 2 esta dentro del rango?: ${valor_dato2}`); // Falso