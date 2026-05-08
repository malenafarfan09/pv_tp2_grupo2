/**
 * TRABAJO PRÁCTICO N°2 - EJERCICIO 6
 * Consigna: Crear un array denominado edades con al menos 8 edades distintas.
Recorrer el array, mostrar las edades y mostrar el promedio de las edades
 */
const edades = [20, 25, 18, 32, 21, 28, 40, 19];

const calcularPromedioEdades = (listaEdades) => {
    let suma = 0;
    console.log("Edades en el array:");
    listaEdades.forEach(edad => {
        console.log(edad);
        suma += edad;
    });
    const promedio = suma / listaEdades.length;
    console.log(`El promedio de las edades es: ${promedio}`);
};

calcularPromedioEdades(edades);
