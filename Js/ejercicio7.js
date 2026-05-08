const nombres = ["Santiago", "Tati", "Nico", "Danna", "Martin", "Lautaro"];

const obtenerNombreMasLargo = (listaNombres) => {
    console.log(`Nombres registrados: ${listaNombres.join(", ")}`);
    let nombreLargo = listaNombres[0];

    listaNombres.forEach(nombre => {
        if (nombre.length > nombreLargo.length) {
            nombreLargo = nombre;
        }
    });

    console.log(`El nombre más largo es: ${nombreLargo}`);
};

obtenerNombreMasLargo(nombres);
