const horas = 20, minutos = 38;
const hora = (h, m) =>{
    console.log("Hora establecida: " + h + ":" + m);
    console.log("Expresado en segundos: " + ((h*3600) + (m*60)));
}
hora (horas,minutos);