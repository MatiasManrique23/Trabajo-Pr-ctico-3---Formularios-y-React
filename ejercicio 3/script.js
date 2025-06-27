const todosEndpoint = "https://jsonplaceholder.typicode.com/todos";
const todosListDiv = document.getElementById("todos-list");
const errorMessageDiv = document.getElementById("error-message");
const loadingDiv = document.getElementById("loading");
const fetchTodosBtn = document.getElementById("fetch-todos-btn");

fetchTodosBtn.addEventListener("click", async () => {
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

    // Filtramos las tareas completadas y tomamos solo las primeras 5
    const tareasCompletadas = data.filter(tarea => tarea.completed === true).slice(0, 5);

    if (tareasCompletadas.length > 0) {
      const ul = document.createElement("ul");

      tareasCompletadas.forEach(tarea => {
        const li = document.createElement("li");
        li.textContent = tarea.title;
        li.classList.add("todo-item", "completed");
        ul.appendChild(li);
      });

      todosListDiv.appendChild(ul);
    } else {
      todosListDiv.textContent = "No hay tareas completadas.";
    }

  } catch (error) {
    loadingDiv.style.display = "none";
    errorMessageDiv.textContent = `Error de conexión: ${error.message}`;
  }
});
