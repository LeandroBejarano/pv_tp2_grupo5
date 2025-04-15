const boton = document.getElementById("miBoton");
const contenedor = document.getElementById("contenedor");
let estado = "red";

boton.addEventListener("click", () => {
    if (estado == "red")
    {
        contenedor.style.backgroundColor="blue";
        estado = "blue";
    }
    else
    {
        contenedor.style.backgroundColor="red";
        estado = "red";
    }

    console.log("SE CAMBIO EL COLOR A " + estado)
});