import { actualizarTexto } from './funciones.js';

const input = document.getElementById('entradaTexto');
const salida = document.getElementById('textoMostrado');

input.addEventListener('input', () => {
  actualizarTexto(input, salida);
});
