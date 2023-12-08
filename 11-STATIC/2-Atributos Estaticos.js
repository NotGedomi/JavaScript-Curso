// Atributos Estaticos en JS
class Persona {
    // Con Static, el atributo pertenece a la clase, mas no a ningun objeto
    static contadorObjetosPersona = 0; // Esta variable al ser static, es propia de una clase

    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        Persona.contadorObjetosPersona++; // Accedemos al atributo con la Class
    }
}

// Impresion y prueba del atributo static
let persona1 = new Persona('Gedomi', 'Yamete');
console.log(persona1.contadorObjetosPersona); // Resultado: undefined <- ya que el atributo static debe usarse con la clase no con el objeto
console.log(Persona.contadorObjetosPersona)// Resultado: 1 <- ahora si brinda el valor del atributo


