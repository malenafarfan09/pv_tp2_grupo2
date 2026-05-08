/**
 * TRABAJO PRÁCTICO N°2 - EJERCICIO 3
 * Consigna: Calcular el volumen de una esfera con radio = 4m.
 */
const radio = 4;

const volumen = (4/3) * Math.PI * Math.pow(radio, 3);

console.log(`El volumen de una esfera con radio de ${radio}m es: ${volumen.toFixed(2)} m3.`);