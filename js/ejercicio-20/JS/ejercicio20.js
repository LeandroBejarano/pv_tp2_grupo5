import { obtenerCapital, llenarCapital } from './funciones.js';

const paisSelect = document.getElementById('paises');
const capitalSelect = document.getElementById('capitales');

paisSelect.addEventListener('change', () => {
  const pais = paisSelect.value;
  const capital = obtenerCapital(pais);

  if (capital) {
    llenarCapital(capitalSelect, capital);
    console.log(`País seleccionado: ${pais}, Capital: ${capital}`);
  } else {
    capitalSelect.innerHTML = "<option value=''>--Elegir capital--</option>";
    console.log("País no seleccionado.");
  }
});
