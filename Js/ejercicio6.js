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
