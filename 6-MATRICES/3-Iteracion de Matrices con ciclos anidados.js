// Iteracion de Matrices
let matriz = [[100,200,300],[700,800,900,1000]]; // Matriz con 3 renglones

// --- SABER CANTIDAD DE RENGLONES Y COLUMNAS ---
// Numero de RENGLONES:
console.log(matriz.length); // Resultado: largo del arreglo(2 objetos/renglones)

// Numero de COLUMNAS (Depende del numero de renglon):
console.log(matriz[0].length); // Resultado: El primer renglon tiene 3 columnas
console.log(matriz[1].length); // Resultado: El segundo renglonm tiene 4 columnas

// ITERACION 
for(let renglones = 0 ; renglones < matriz.length ; renglones++){
    console.log(matriz[renglones]); // DA COMO RESULTADO LOS 2 RENGLONES
    for(let columnas = 0 ; columnas < matriz[renglones].length ; columnas++){
        console.log(matriz[renglones][columnas]); // DA COMO RESULTADO LOS 7 DATOS(LEE CADA COLUMNA EN CADA RENGLON), 3 DEL PRIMER RENGLON Y 4 DEL SEGUNDO RENGLON
    }
};
