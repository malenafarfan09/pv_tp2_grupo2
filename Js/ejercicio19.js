
import { obtenerNuevoTexto } from './funciones19.js';

document.getElementById('btnCambiar').addEventListener('click', () => {
    
    const textoNuevo = obtenerNuevoTexto();
    
    document.getElementById('textoParrafo').textContent = textoNuevo;
});