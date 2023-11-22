// Arreglos con simplificacion de sintaxis
let numerosArreglo = [100,200,300,400,500]; // Aqui declaramos e inicializamos el arreglo

// Impresion de valores con Ciclos: 
// Nota: Para saber la cantidad de elementos del arreglo, usamos el atributo "lenght"

// Con FOR
for (i = 0 ; i < numerosArreglo.length ; i++){
    console.log(numerosArreglo[i]); // Resultado: 100
}

// Con WHILE
let index = 0;
while(index < numerosArreglo.length){
    console.log(numerosArreglo[index]);
    index++
}

// Con DO WHILE
let indice = 0;
do{
    console.log(numerosArreglo[indice]);
    indice++
}while(indice < numerosArreglo.length)
