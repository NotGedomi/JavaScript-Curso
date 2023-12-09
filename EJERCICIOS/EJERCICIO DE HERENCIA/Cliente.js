// Ejercicio de Herencia

// Nota: Al estar en la misma carpeta, se importa la clase Persona en el extends
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