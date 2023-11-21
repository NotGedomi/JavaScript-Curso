// Operadores de Comparacion
let a = 5;
let b = "5";
let n1 = 2;
let n2 = 4;

/*

NOTA: Usaremos String Interpolation con Backtips (`${}`) para 
imprimir el resultado en string y a la vez mantener las operaciones

*/

// Igualdad (Dato) ==
console.log(`${a} == ${b}: ${a == b}`); // Verdadero

// Igualdad estricta (Tipo y Dato) ===
console.log(`${a} === ${b}: ${a === b}`); // Falso

// Distinto (Dato) !=
console.log(`${a} != ${b}: ${a != b}`); // Falso

// Distinto estricta (Tipo y Dato) !==
console.log(`${a} !== ${b}: ${a !== b}`); // Verdadero

// Mayor que >
console.log(`${n1} > ${n2}: ${n1 > n2}`); // Falso

// Mayor igual que >=
console.log(`${n1} >= ${n2}: ${n1 >= n2}`); // Falso

// Menor que <
console.log(`${n1} < ${n2}: ${n1 < n2}`); // Verdadero

// Menor igual que <=
console.log(`${n1} <= ${n2}: ${n1 <= n2}`); // Verdadero