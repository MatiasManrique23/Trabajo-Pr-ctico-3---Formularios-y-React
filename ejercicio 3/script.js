const todosEndpoint = "https://jsonplaceholder.typicode.com/todos?_limit=5";
const todosListDiv = document.getElementById("todos-list");
const errorMessageDiv = document.getElementById("error-message");
const loadingDiv = document.getElementById("loading");
const formTareas = document.getElementById("formTareas");

// Evento submit del formulario
formTareas.addEventListener("submit", async (event) => {
  event.preventDefault(); // Evita que se recargue la página

  // Limpiar estados anteriores
  todosListDiv.innerHTML = "";
  errorMessageDiv.textContent = "";
  loadingDiv.style.display = "block";

  try {
    const response = await fetch(todosEndpoint);
    loadingDiv.style.display = "none";

    if (!response.ok) {
      errorMessageDiv.textContent = `Hubo un problema: ${response.status} - ${response.statusText}`;
      return;
    }

    const data = await response.json();

    if (data && data.length > 0) {
      data.forEach(tarea => {
        const todoElement = document.createElement("div");
        todoElement.classList.add("todo-item");
        todoElement.classList.add(tarea.completed ? "completed" : "incomplete");

        todoElement.innerHTML = `
          <p><strong>ID:</strong> ${tarea.id}</p>
          <p><strong>Título:</strong> ${tarea.title}</p>
          <p><strong>Completado:</strong> ${tarea.completed ? "Sí" : "No"}</p>
        `;

        todosListDiv.appendChild(todoElement);
      });
    } else {
      todosListDiv.textContent = "No se encontraron tareas.";
    }

  } catch (error) {
    loadingDiv.style.display = "none";
    errorMessageDiv.textContent = `Error de conexión: ${error.message}`;
  }
});
