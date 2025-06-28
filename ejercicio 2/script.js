// La lista de palabras predefinida
const palabras = ["manzana", "banana", "pera", "durazno", "frutilla", "mango", "naranja", "sandía"];

// Función para mostrar la lista completa de palabras
function mostrarTodasLasPalabras() {
  const listaHtml = document.getElementById("listaPalabras");
  listaHtml.innerHTML = ''; // Limpiamos la lista actual
  palabras.forEach(palabra => {
    const li = document.createElement("li");
    li.textContent = palabra;
    listaHtml.appendChild(li);
  });
}

// Función para filtrar palabras y actualizar la UI
function filtrarPalabras() {
  const filtroInput = document.getElementById("filtroInput");
  const textoFiltro = filtroInput.value.toLowerCase().trim(); // Obtenemos el texto y lo limpiamos
  const listaHtml = document.getElementById("listaPalabras");
  const mensajeError = document.getElementById("mensajeError"); // Para el mensaje de error de la consigna

  // Limpiar el mensaje de error cada vez que se intenta filtrar
  mensajeError.textContent = "";

  // Si el campo de texto está vacío al presionar "Filtrar"
  if (textoFiltro === "") {
    mensajeError.textContent = "Error: Por favor, ingresa un texto para filtrar."; // Mostrar el mensaje de error de la consigna 
    mostrarTodasLasPalabras(); // Mostrar la lista completa [cite: 14]
    return; // Salir de la función para no hacer un filtrado vacío.
  }

  // Filtrar las palabras
  const palabrasFiltradas = palabras.filter(palabra =>
    palabra.toLowerCase().includes(textoFiltro)
  );

  // Actualizar el contenido mostrado en la página, sin recargarla [cite: 14]
  listaHtml.innerHTML = ''; // Limpiamos la lista antes de mostrar los resultados

  if (palabrasFiltradas.length > 0) {
    palabrasFiltradas.forEach(palabra => {
      const li = document.createElement("li");
      li.textContent = palabra;
      listaHtml.appendChild(li);
    });
  } else {
    const li = document.createElement("li");
    li.textContent = "No se encontraron palabras que coincidan.";
    listaHtml.appendChild(li);
  }
}

// Event Listeners
document.addEventListener("DOMContentLoaded", mostrarTodasLasPalabras); // Mostrar todas las palabras al cargar la página

// Listener para el botón "Filtrar"
document.getElementById("filtrarBtn").addEventListener("click", filtrarPalabras);

// NUEVA FUNCIONALIDAD: Listener para el campo de texto (input)
// Cuando el usuario escribe o borra texto, verificamos si el campo está vacío.
document.getElementById("filtroInput").addEventListener("keyup", function() {
  const textoFiltro = this.value.toLowerCase().trim();
  const mensajeError = document.getElementById("mensajeError");

  if (textoFiltro === "") {
    mostrarTodasLasPalabras(); // Si el input está vacío, mostrar todas las palabras
    mensajeError.textContent = ""; // Limpiar cualquier mensaje de error si el usuario borró todo
  }
});