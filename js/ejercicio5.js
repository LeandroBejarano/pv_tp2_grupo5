const horas = 20, minutos = 38;

const segundosh = h => h*3600;
const segundosm = m => m*60;

console.log("Hora establecida: " + horas + ":" + minutos);
console.log("Expresado en segundos: " + (segundosh(horas) + (segundosm(minutos))));