/*
¿Que es el Hoisting?

Podemos trabajar con variables antes de haberlas declarado
El "hoisting" o "elevación" es un comportamiento en JavaScript 
que mueve las declaraciones de variables y funciones al inicio 
de su alcance actual antes de que se ejecute el código.

Esto significa que puedes usar una función o una variable antes 
de que se declare en tu código.

NOTA: Podemos restringir su uso con 'use strict' al inicio del codigo
*/

console.log(miVariable); // undefined
var miVariable = 5;
console.log(miVariable); // 5

/*
Es importante tener en cuenta que las variables declaradas 
con let y const no son "elevadas" al inicio de su alcance. 

Esto significa que si intentas acceder a una variable let 
o const antes de su declaración, obtendrás un error de referencia 3.

Finalmente, aunque el "hoisting" puede parecer una funcionalidad útil,
puede llevar a confusión y errores si no se entiende bien. Por lo tanto, 
es mejor declarar y inicializar las variables antes de usarlas en tu código
*/