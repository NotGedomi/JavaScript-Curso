// Uso de protoype en JS
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return `${this.nombre} ${this.apellido}`;
    }
}

let madre = new Persona('Aura', 'Onichan', 'auralamasbonita2024@gmail.com');
madre.tel = '76543210';
console.log(madre.nombreCompleto()); // Resultado: Aura Onichan
console.log(madre.tel); // Resultado: 76543210

let padre = new Persona('Juanito', 'Alcachofa', 'quepasacauga@gmail.com');

// Usando Prototype para añadir una propiedad a todos los objetos de tipo Persona
Persona.prototype.tel = '443322'; // Se añade esta propiedad con ese valor a todos los Objects tipo Persona, excepto los que ya tienen esa propiedad
console.log(padre.tel); // Resultado: 433322