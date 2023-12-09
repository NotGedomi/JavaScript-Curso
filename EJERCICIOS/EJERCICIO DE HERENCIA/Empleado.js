// Ejercicio de Herencia

// Nota: Al estar en la misma carpeta, se importa la clase Persona en el extends
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
