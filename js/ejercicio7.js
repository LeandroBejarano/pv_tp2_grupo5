const nombres = ["Juan", "Esteban", "Hector Gabriel", "Manuel", "Javier", "Pedro"];
const largo = n =>
{
    let nombrelargo = "";
    for (let i=0 ; i < n.length ; i++)
    {
        if (nombrelargo.length < n[i].length)
            nombrelargo = n[i];
    }
    console.log("El nombre más largo es: " + nombrelargo);
}

largo (nombres);