// Lista predefinida de palabras
const palabras = ["manzana", "banana", "pera", "durazno", "frutilla", "mango", "naranja", "sandía"];

// Muestra la lista completa al cargar la página
function mostrarTodasLasPalabras() {
  const listaHtml = document.getElementById("listaPalabras");
  listaHtml.innerHTML = '';
  palabras.forEach(palabra => {
    const li = document.createElement("li");
    li.textContent = palabra;
    listaHtml.appendChild(li);
  });
}

// Función para filtrar palabras
function filtrarPalabras(event) {
  event.preventDefault(); // Evita recargar la página

  const textoFiltro = document.getElementById("filtroInput").value.toLowerCase().trim();
  const listaHtml = document.getElementById("listaPalabras");
  const mensajeError = document.getElementById("mensajeError");

  mensajeError.textContent = "";

  if (textoFiltro === "") {
    mensajeError.textContent = "Error: Por favor, ingresa un texto para filtrar.";
    mostrarTodasLasPalabras();
    return;
  }

  const palabrasFiltradas = palabras.filter(palabra =>
    palabra.toLowerCase().includes(textoFiltro)
  );

  listaHtml.innerHTML = '';

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

// Mostrar todas las palabras al cargar
document.addEventListener("DOMContentLoaded", mostrarTodasLasPalabras);

// Asignar evento al formulario
document.getElementById("formFiltro").addEventListener("submit", filtrarPalabras);

// Extra: si borra el input, se muestra la lista completa
document.getElementById("filtroInput").addEventListener("keyup", function () {
  const texto = this.value.trim();
  if (texto === "") {
    document.getElementById("mensajeError").textContent = "";
    mostrarTodasLasPalabras();
  }
});
