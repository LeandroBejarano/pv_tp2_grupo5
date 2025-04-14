const nombres = ["Juan", "Esteban", "Hector Gabriel", "Manuel", "Javier", "Pedro"];
const largo = n =>
{
    let nombrelargo = "";
    n.forEach((value) => {
        if (nombrelargo.length < value.length) { 
            nombrelargo=value;
        }
    });
    return nombrelargo;
}

console.log("El nombre más largo es: " + largo(nombres));