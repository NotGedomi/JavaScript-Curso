// Sobreescritura

// => Clase Padre
class Empleado{
    constructor(nombre,sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    obtenerDetalles(){
        return `
                EMPLEADO
                => Nombre: ${this._nombre}
                => Sueldo: S/${this._sueldo}`
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        this._sueldo = sueldo;
    }
}

// => Clase Hija
class Gerente extends Empleado{
    constructor(nombre,sueldo,departamento){
        super(nombre,sueldo);
        this._departamento = departamento;
    }

    obtenerDetalles(){
        return `
                ${super.obtenerDetalles()}
                => Departamento: ${this._departamento}` 
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }
}

let gerente1 = new Gerente('Tilin',1900,'Sistemas');
console.log(gerente1.obtenerDetalles());