// Función que se ejecuta al hacer clic en "Calcular"
function calcular() {
  // Obtenemos los valores ingresados por el usuario
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let operacion = document.getElementById("operacion").value;
  let resultado;

  // Realizamos la operación seleccionada
  if (operacion === "suma") {
    resultado = num1 + num2;
  } else if (operacion === "resta") {
    resultado = num1 - num2;
  } else if (operacion === "multiplicacion") {
    resultado = num1 * num2;
  } else if (operacion === "division") {
    resultado = "Error: la división no está permitida."; // por seguridad
  }

  // Mostramos el resultado
  document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
}

// Función que se ejecuta cuando se cambia el valor del <select>
document.getElementById("operacion").addEventListener("change", function () {
  let operacion = this.value;
  let boton = document.getElementById("calcularBtn");

  // Si el usuario elige "división", desactivamos el botón
  if (operacion === "division") {
    boton.disabled = true;
  } else {
    boton.disabled = false;
  }
});
