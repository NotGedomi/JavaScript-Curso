// Subcadenas en JS: Extracto de una parte de la cadena
let cadena = 'Hola Mundo';
let larg_cadena = cadena.length;
console.log(larg_cadena)// Resultado: 10

// SUBSTRING Y SLICE (startIndex,endIndex)

// CON 1 PARAMETRO
let subcadena_substring = cadena.substring(1);
console.log(subcadena_substring); // Devuelve desde el indice 1
let subcadena_slice = cadena.slice(1);
console.log(subcadena_slice); // Devuelve desde el indice 1

subcadena_substring = cadena.substring(-2);
console.log(subcadena_substring); // Devuelve Hola Mundo porque toma los negativos como 0
subcadena_slice = cadena.slice(-2);
console.log(subcadena_slice); // Devuelve do porque empieza en inverso (-2(d), -1(o))

subcadena_substring = cadena.substring(11);
console.log(subcadena_substring); // Devuelve empty porque no existe el indice
subcadena_slice = cadena.slice(11);
console.log(subcadena_slice); // Devuelve empty porque no existe el indice

// CON AMBOS PARAMETROS
subcadena_substring = cadena.substring(0,4);
console.log(subcadena_substring); // Devuelve Hola
subcadena_slice = cadena.slice(0,4);
console.log(subcadena_slice); // Devuelve Hola

subcadena_substring = cadena.substring(90,5);
console.log(subcadena_substring); // Devuelve Mundo ya que ignora el 90
subcadena_slice = cadena.slice(90,5);
console.log(subcadena_slice); // Devuelve empty ya que 90 no es valido como indice

subcadena_substring = cadena.substring(-3,4);
console.log(subcadena_substring); // Devuelve Hola ya que toma los negativos como 0
subcadena_slice = cadena.slice(-7,-1);
console.log(subcadena_slice); // Devuelve a Mund