const notas = [8, 4, 9, 6, 5, 7, 10, 3, 6, 8];

const analizarNotas = (misNotas) => {
    let suma = 0;
    let aprobadas = 0;

    console.log("Listado de notas:");
    misNotas.forEach(nota => {
        console.log(`Nota: ${nota}`);
        suma += nota;
        if (nota >= 6) {
            console.log("- Estado: Aprobada");
            aprobadas++;
        } else {
            console.log("- Estado: Desaprobada");
        }
    });

    console.log(`Promedio general: ${suma / misNotas.length}`);
    console.log(`Cantidad de notas aprobadas: ${aprobadas}`);
};

analizarNotas(notas);
