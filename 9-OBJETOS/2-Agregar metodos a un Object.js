// Agregar metodos a Objects en JavaScript
let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    // Creamos un metodo dentro, para retornas el nombre completo
    nombreCompleto: function(){ // No usamos parametros por el momento
        return this.nombre + this.apellido; // Usamos "this" para hacer referencia al objeto y usar sus propiedades
    },
    // Tambien podemos crear metodos con parametros
    edadAlCuadrado: function(edadCu){ // Pasamos un parametro
        final_edad = this.edad ** edadCu; // Edad del object persona elevado al numero del parametro
        return final_edad // Retornamos un valor
    }
}

// Usando un metodo sin parametro/argumento
console.log(persona.nombreCompleto()); // Resultado: JuanPerez NOTA: es necesario el parentesis ya que es una funcion, aunque sea sin argumentos

// usando un metodo con parametro/argumento
console.log(persona.edadAlCuadrado(2)); // Resultado --> Edad al cuadrado: 784
