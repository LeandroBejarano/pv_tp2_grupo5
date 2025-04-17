const mayor  = (n1, n2) =>
{
    if (n1 > n2)
        console.log("El número mayor es " + n1);
    else if (n1 < n2)
        console.log("El número mayor es " + n2);
    else
        console.log ("Los dos números ingresados son iguales");
}

mayor (21,12); // caso n1 > n2
mayor (5,9); // caso n2 > n1
mayor (11,11); // caso n1 = n2