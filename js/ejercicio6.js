const edades = [4, 9, 12, 15, 21, 26, 31, 68];
let total = e => 
    {
    let suma=0;
    e.forEach(value => suma+=value);
    return suma;
    }
let conteo = e =>
    { 
    let conteo=0;
    e.forEach(value => conteo++);
    return conteo;
    }
const listado = e => e.forEach ((value) => console.log ("Las edades registradas son: " + value));
listado(edades);
console.log ("Y el promedio es: " + (total(edades)/conteo(edades)));