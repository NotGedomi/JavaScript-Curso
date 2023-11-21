// Operadores Logicos
let a = true;
let b = false;

// Operador && (and o Y) solo da verdadero si ambos operandos son verdaderos
console.log(`${a} && ${b} -> ${a && b}`); // Falso
console.log(`${a} && ${a} -> ${a && a}`); // Verdadero

// Operador || (or u O) da verdadero si alguno de ambos operandos es verdadero
console.log(`${a} || ${b} -> ${a || b}`); // Verdadero
console.log(`${b} || ${b} -> ${b || b}`); // Falso

// Operador ! (not o NO) invierte o brinda el opuesto del valor de algun operando
console.log(`${a} -> ${!a}`) // Era Verdadero pero con el inverso resulta Falso