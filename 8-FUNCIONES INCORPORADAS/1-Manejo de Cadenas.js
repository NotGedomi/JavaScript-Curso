// Manejo de Cadenas
let cadena1 = 'Hola';

// LENGHT: Atributo para obtener el largo de una cadena
largo_cadena1 = cadena1.length;
console.log(largo_cadena1); // Resultado: 4

// RECORDAR QUE LAS CADENAS EN JS SON INMUTABLES
cadena1[0] = "x"; // Se "espera" modificar el primer indice de la cadena1 (NO SUCEDERÁ)
console.log(cadena1); // Resultado: Hola

// SI PODEMOS ASIGNAR UNA NUEVA CADENA
cadena1 = "Adios"; // Nuevo valor de la variable cadena1
console.log(cadena1); // Resultado: Adios
largo_cadena1 = cadena1.length;
console.log(largo_cadena1); // Resultado: 5

// Recorrer cadenas
for(let i = 0 ; i < largo_cadena1; i++){
    console.log(cadena1[i]);
}
