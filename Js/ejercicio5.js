/**
 * TRABAJO PRÁCTICO N°2 - EJERCICIO 5
 * Consigna: Convertir horas y minutos a segundos.
 */


const horas = 2;
const minutos = 30;

const segundosTotales = (horas * 3600) + (minutos * 60);

console.log(`Tiempo ingresado: ${horas} horas y ${minutos} minutos.`);
console.log(`El resultado de la conversión es: ${segundosTotales} segundos.`);