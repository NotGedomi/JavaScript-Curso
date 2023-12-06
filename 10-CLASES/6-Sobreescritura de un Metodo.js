// Sobreescritura en JS: para modificar el comportamiento de un metodo heredado
// Creamos la Clase Padre
class Persona {
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    // Creamos un metodo para llamar el nombre completo
    nombreCompleto(){ // En clases, al declarar un metodo, no es necesario la palabra function, se sobreentiende
        return `${this._nombre} ${this._apellido}`;
    }
}

// Creamos la Clase Hija
class Empleado extends Persona {
    constructor(nombre, apellido, departamento){ // Se le pasan los parametros de la Clase Padre
        // Uso de la palabra reservada Super
        super(nombre,apellido); // Con esto llamamos al constructor de la Clase Padre
        this._departamento = departamento;                                                                                                
    }

    // Sobreescritura del metodo nombreCompleto
    nombreCompleto(){
        return super.nombreCompleto() + `, ${this._departamento}`
    }
}

// Creamos el objeto empleado1 con la plantilla class Empleado
let empleado1 = new Empleado('Gedomi','Onichan','Papalandia');

// Imprimimos
console.log(empleado1.nombreCompleto())