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

    // Metodo toString: Ya viene por defecto pero podemos redefinirlo
    toString(){
        return this.nombreCompleto();
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

let persona1 = new Persona('Tilin','Insano');
let empleado1 = new Empleado('Tilinaso','Equisde','Tecnologia');

// Con Sobreescritura de toString en la clase Persona imprimimos los objetos
console.log(empleado1.toString()) // Resultado: 'Tilinaso Equisde, Tecnologia'
console.log(persona1.toString()); // Resultado: 'Tilin Insano'

/* 
NOTA: A este comportamiento se le llama Polimorfismo.
Permite que un método tenga diferentes implementaciones 
basadas en el objeto que lo está invocando.
*/
