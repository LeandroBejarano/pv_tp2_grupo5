function cambiar()
{
    let txt = document.getElementById("texto");
    txt.innerText = "Texto cambiado";
}


document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btnCambiar");
    btn.addEventListener("click", cambiar);
});