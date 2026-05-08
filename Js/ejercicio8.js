/**
 * TRABAJO PRÁCTICO N°2 - EJERCICIO 8
 * Consigna:   Declarar un array denominado notas que almacene 10 notas (números enteros). Con el
array cargado realice lo siguiente:
a) Recorrer el array y mostrar cada nota.
b) Mostrar cuáles notas están aprobadas (>=6)
c) Mostrar cuáles están desaprobadas (<6).
d) Calcular el promedio general.
e) Mostrar la cantidad de notas que están aprobadas.
 */
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
