// Imprimir de 3 en 3 los primeros 10 numeros en positivo
let max_posi = 10;
let min_pos = 1;

for ( i = min_pos ; i <= max_posi ; i += 3) {
    console.log(i); // Resultado: 1,4,7,10
}

// Imprimir de 3 en 3 los primeros 10 numeros en negativo
let max_neg = -10;
let min_neg = 1;

for (let i = min_neg ; i >= max_neg ; i -= 3) {
    console.log(i); // Resultado: 1,-2,-5,-8
}
