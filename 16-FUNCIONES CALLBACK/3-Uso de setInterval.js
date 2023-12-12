// Llamadas Asincronas setInterval
// A diferencia de setTimeout, esta otra funciona llamando cada cierto tiempo
let reloj = () => {
    let fecha = new Date();
    console.log(`La hora es ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

setInterval(reloj, 1000); // Cada 1 segundo llamara a la funcion e imprimira la hora

