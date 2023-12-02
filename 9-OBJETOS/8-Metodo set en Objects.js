// Metodo SET en Objects:
// Un setter es una función que se utiliza para establecer o cambiar el valor de una propiedad 
// específica de un objeto.
let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    idioma: 'es',
    get lang(){ // Sirve para que al traer una info, se convierta a lo especificado
        return this.idioma.toUpperCase();
    },
    set lang( language ){ // Para modificar un valor a establecer
        this.idioma = language.toUpperCase();
    },
    nombreCompleto: function(){ 
        return this.nombre + this.apellido;
    }
}

// Ejemplo: Imprimir el idioma 'es', pero lo traera en Mayusculas
console.log(persona.lang); // Resultado: ES(Se convirtió de minuscula a mayusculas gracias al get)
// Si modificamos el lenguaje:
persona.lang = 'en';
console.log(persona.idioma); // Resultado: EN(Se almacenó el valor como Mayuscula pese a estar en minusculas gracias al set)