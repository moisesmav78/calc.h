seguir = prompt("Bienvenido a la calculadora, quiere seguir? s/n: ");
if (seguir == "s") {
    opcion = prompt("1.- suma, 2.- resta 3.- Multiplicacion 4.- Division, que quiere hacer? ");
    if (opcion == 1) {
        console.log("esto es suma ")
        n1 = parseInt(prompt("Ingrese número 1: "));
        n2 = parseFloat(prompt("Ingrese número 2: "));
        resultado = n1 + n2;
        console.log(resultado);
    }
    else if (opcion == 2) {
    console.log(" Esto es resta")
    n1 = parseInt(prompt("Ingrese número 1: "));
    n2 = parseFloat(prompt("Ingrese número 2: "));
    resultado = n1 - n2;
    console.log(resultado)
    }
    else if (opcion == 3) {
    console.log(" Esto es Multiplicación ")
    n1 = parseInt(prompt("Ingrese número 1: "));
    n2 = parseFloat(prompt("Ingrese número 2: "));
    resultado = n1 * n2;
    console.log(resultado)
    }
    else 
    console.log(" Esto es division ")
    n1 = parseInt(prompt("Ingrese número 1: "));
    n2 = parseFloat(prompt("Ingrese número 2: "));
    resultado = n1 / n2;
    console.log(resultado)
}




