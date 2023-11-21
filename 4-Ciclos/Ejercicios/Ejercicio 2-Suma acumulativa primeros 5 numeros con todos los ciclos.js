// Suma acumulativa de los primeros 5 numeros con ciclos (For, While, Do While)

// Variables:
let min_num_for = 1;
let min_num_while = 1;
let min_num_do_while = 1;
let max_num_for = 5;
let max_num_while = 5;
let max_num_do_while = 5;
let suma_acumulativa_for = 0;
let suma_acumulativa_while = 0;
let suma_acumulativa_do_while = 0;


// Ciclo For
for ( i = min_num_for ; i <= max_num_for ; i++) {
    suma_acumulativa_for += i; // suma_acumulativa_for = i + suma_acumulativa_for
    console.log(suma_acumulativa_for); // Resultado de todas las iteraciones: 1,3,6,10,15
}
console.log(suma_acumulativa_for); // Resultado final: 15

// Ciclo While
while (min_num_while <= max_num_while) {
    suma_acumulativa_while += min_num_while; // suma_acumulativa_while = min_num + suma_acumulativa_while
    min_num_while++; // min_num = min_num + 1
    console.log(suma_acumulativa_while);  // Resultado de todas las iteraciones: 1,3,6,10,15
}
console.log(suma_acumulativa_while); // Resultado final: 15

// Ciclo While
do {
    suma_acumulativa_do_while += min_num_do_while; // suma_acumulativa_do_while = min_num + suma_acumulativa_do_while
    min_num_do_while++; // min_num = min_num + 1
    console.log(suma_acumulativa_do_while); // Resultado de todas las iteraciones: 1,3,6,10,15
} while (min_num_do_while <= max_num_do_while);
console.log(suma_acumulativa_while); // Resultado final: 15