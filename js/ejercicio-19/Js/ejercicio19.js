import { mostrarDatos } from './funciones.js';

const btn = document.getElementById('mostrarDatosBtn');

btn.addEventListener('click', () => {
  const nombre = document.querySelector('#nombre').value;
  const apellido = document.querySelector('#apellido').value;
  const libreta = document.querySelector('#libreta').value;

  mostrarDatos(nombre, apellido, libreta);
});
