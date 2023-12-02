// Metodo GET en Objects:
// Un getter es una función que se utiliza para obtener el valor de una propiedad 
// específica de un objeto.
let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    nombreCompleto: function(){ 
        return this.nombre + this.apellido;
    }
}
console.log(persona.nombreCompleto()); // Resultado: JuanPerez

// Uso de buenas practicas con Get para traer una propiedad y su valor
let personaConGet = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    get nombreCompleto(){  // Usamos get y eliminamos el termino function
        return this.nombre + this.apellido;
    },
    get edadCuadratica(){
        resultado = this.edad ** 2;
        return resultado
    }
}
// Al imprimir ya no necesitamos el parentesis 
console.log(personaConGet.nombreCompleto); // Resultado: JuanPerez
console.log(personaConGet.edadCuadratica); // Resultado: 784