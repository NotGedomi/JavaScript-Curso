// Ejercicio Mayoria de Edad
const  EDAD_ADULTO = 18;
let edadPersona = 9;

// Usamos if else
if(edadPersona >= EDAD_ADULTO){
    console.log(`Es mayor de edad`)
}
else{
    console.log(`Es menor de edad`)
}

// Usamos Ternario
(edadPersona >= EDAD_ADULTO) ? console.log(`Es mayor de edad`) : console.log(`Es menor de edad`);