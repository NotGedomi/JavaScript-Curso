// Sentencia Switch (Segun en pseudocodigo) trabaja UNICAMENTE con valores numericos
diaSemana = 5;


// Usamos Switch
switch (diaSemana) {
    case 1 : console.log('Dia de la semana: Lunes');
    break; // NOTA: Es importante break para detener la evaluación una vez se encuentra el resultado
    case 2 : console.log('Dia de la semana: Martes');
    break;
    case 3 : console.log('Dia de la semana: Miercoles');
    break;
    case 4 : console.log('Dia de la semana: Jueves');
    break;
    case 5 : console.log('Dia de la semana: Viernes');
    break;
    case 6 : console.log('Dia de la semana: Sabado');
    break;
    case 7 : console.log('Dia de la semana: Domingo');
    break;
    default : console.log(`El valor proporcionado no corresponde a ningun dia de la semana: ${diaSemana }`);
}


