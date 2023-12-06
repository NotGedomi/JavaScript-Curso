// Herencia en JS

// Creamos la Clase Padre
class Persona {
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }
    
    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }
    
    set apellido(apellido){
        this._apellido = apellido;
    }
}

// Creamos la Clase Hija
class Empleado extends Persona {
    constructor(nombre, apellido, departamento){ // Se le pasan los parametros de la Clase Padre
        // Uso de la palabra reservada Super
        super(nombre,apellido); // Con esto llamamos al constructor de la Clase Padre
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }
}

// Impresion de la clase hija
let empleado1 = new Empleado('Gedomis','Onichan','Peppalandia');
console.log(empleado1); // Resultado: Imprime todo el objeto empleado1 con nombre, apellido y departamento
console.log(empleado1.nombre); // Resultado: Gedomis (Hereda el metodo get nombre de la clase padre)
