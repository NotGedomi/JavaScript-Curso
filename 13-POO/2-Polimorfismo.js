// Polimorfismo


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
let empleado1 = new Empleado('Tilin','Sistemas');

function imprimir(x){
    console.log(x.obtenerDetalles());
}

// Resultados diferentes por Polimorfismo, ya que el metodo "obtenerDetalles" se comport distinto en cada uno.
imprimir(gerente1);
imprimir(empleado1);