const edades = [4, 9, 12, 15, 21, 26, 31, 68];

const listado = e =>{
    console.log ("Edades registradas: ");
    let total=0;
    let cont=0;
    for (cont ; cont < e.length ; cont++)
    {
        total+=e[cont];
        console.log (e[cont]);
    }
    console.log ("Promedio: " + (total/cont));
}
listado(edades);