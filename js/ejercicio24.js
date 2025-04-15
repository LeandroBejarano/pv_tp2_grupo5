const boton = document.getElementById("miBoton");
const contenedor = document.getElementById("contenedor");

const colores = ["red", "blue", "green", "black", "white", "yellow", "grey"];

boton.addEventListener("click", () => {
    const numero = Math.floor(Math.random() * 7);
    const color = colores[numero]; 

    contenedor.style.backgroundColor=color;
    console.log("SE CAMBIO EL COLOR A " + color)
});