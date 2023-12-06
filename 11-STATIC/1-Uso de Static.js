// Static en JS: Permite agregar metodos exclusivos de una CLASE
// Creamos la Clase Padre
class Persona {
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    nombreCompleto(){
        return `${this._nombre} ${this._apellido}`;
    }

    // Creamos un metodo Static
    static saludar(){
        let mensaje = 'Hola tilines';
        return mensaje;
    }

    // Creamos un metodo Static pasandole un Objeto como Argumento
    static saludar2(persona){
        return persona._nombre; // Llama a la propiedad nombre del objeto
    }

}

// Creamos la Clase Hija
class Empleado extends Persona {
    constructor(nombre, apellido, departamento){
        
        super(nombre,apellido);
        this._departamento = departamento;                                                                                              
    }

    nombreCompleto(){
        return super.nombreCompleto() + `, ${this._departamento}`
    }
}

// Creamos el objeto empleado1 con la plantilla class Empleado
let empleado1 = new Empleado('Tilinaso','Onichan','Papalandia');
let persona1 = new Persona('Gedomi','Onichan');

// Imprimimos una prueba
// console.log(empleado1.saludar()); // Resultado: empleado1.saludar is not a function

// Ahora probamos desde la clase misma
console.log(Persona.saludar()); // Resultado: Hola tilines

// Podemos pasar el metodo Static a los objetos
console.log(Persona.saludar2(empleado1)); // Resultado: Tilinaso


/*
NOTA: RECORDAR QUE LOS METODOS STATIC SE ASOCIAN CON LAS CLASES, NO CON OBJETOS,
SOLO SE LES PUEDEN PASAR OBJETOS COMO PARAMETROS.
*/