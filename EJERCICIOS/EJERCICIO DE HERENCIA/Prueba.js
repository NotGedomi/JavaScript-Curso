// Prueba de todas las clases

// Creacion de clase Persona
class Persona{

    static contadorPersonas = 0;

    constructor(nombre,apellido,edad){
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    get idPersona(){
        return this._idPersona;
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

    get edad(){
        return this._edad;
    }

    set edad(edad){
        this._edad = edad;
    }

    toString(){
        return `Informacion:
            ID: ${this._idPersona} 
            NOMBRE: ${this._nombre} 
            APELLIDO: ${this._apellido} 
            EDAD: ${this._edad}`;
    }
}

// Creacion de clase Empleado
class Empleado extends Persona{

    static contadorEmpleados = 0;

    constructor(nombre,apellido,edad,sueldo){
        super(nombre,apellido,edad);
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }

    get idEmpleado(){
        return this._idEmpleado;
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    toString(){
        return `${super.toString()} 
            ID EMPLEADO: ${this._idEmpleado} 
            SUELDO: S/.${this._sueldo}`
    }
}

// Creacion de clase Cliente
class Cliente extends Persona{

    static contadorClientes = 0;

    constructor(nombre,apellido,edad,fechaRegistro){
        super(nombre,apellido,edad);
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fechaRegistro;
    }

    get idCliente(){
        return this._idCliente;
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }

    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }

    toString(){
        return `${super.toString()} 
            ID CLIENTE: ${this._idCliente} 
            FECHA DE REGISTRO: ${this._fechaRegistro}`
    }
}

// Prueba clase Persona
let persona1 = new Persona('Tilinaso','Insano','25');
console.log(persona1.toString());

let persona2 = new Persona('Aura','Teamo','19');
console.log(persona2.toString());

// Prueba clase Empleado heredado de la clase Persona
let empleado1 = new Empleado('Elcardiaco','Kepasachavales','100',2500);
console.log(empleado1.toString());

// Prueba clase Cliente heredado de la clase Persona
let cliente1 = new Cliente('Pendejo','No dura nada','95','10 de Enero');
console.log(cliente1.toString());
