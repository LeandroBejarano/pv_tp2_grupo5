

const form = document.getElementById('opciones-form');
const opcionSeleccionada = document.getElementById('opcion-seleccionada');

form.addEventListener('change', (event) => {
    if (event.target.name === 'opcion') {
        opcionSeleccionada.textContent = event.target.value;
        console.log('Opción seleccionada:', event.target.value); // Mostrar en la consola

    }
});