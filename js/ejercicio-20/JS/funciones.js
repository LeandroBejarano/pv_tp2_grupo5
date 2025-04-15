const paisCapital = {
    Argentina: "Buenos Aires",
    Brasil: "Brasilia",
    Chile: "Santiago",
    Colombia: "Bogotá",
    México: "Ciudad de México",
    Perú: "Lima"
  };
  
  export function obtenerCapital(pais) {
    return paisCapital[pais] || "";
  }
  
  export function llenarCapital(capitalSelect, capital) {
    capitalSelect.innerHTML = ""; // Limpiar opciones anteriores
  
    const opcion = document.createElement("option");
    opcion.value = capital;
    opcion.textContent = capital;
    capitalSelect.appendChild(opcion);
  }
  