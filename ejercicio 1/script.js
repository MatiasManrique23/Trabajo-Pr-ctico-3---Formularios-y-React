function calcular(event) {
  event.preventDefault(); // Evita que se recargue la página

  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let operacion = document.getElementById("operacion").value;
  let resultado;

  switch (operacion) {
    case "suma":
      resultado = num1 + num2;
      break;
    case "resta":
      resultado = num1 - num2;
      break;
    case "multiplicacion":
      resultado = num1 * num2;
      break;
    case "division":
      if (num2 === 0) {
        resultado = "Error: no se puede dividir por cero.";
      } else {
        resultado = num1 / num2;
      }
      break;
  }

  document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
}

// Esta función habilita o desactiva el botón según la operación y el valor del segundo número
function verificarDivisionPorCero() {
  let operacion = document.getElementById("operacion").value;
  let num2 = parseFloat(document.getElementById("num2").value);
  let boton = document.getElementById("calcularBtn");

  if (operacion === "division" && num2 === 0) {
    boton.disabled = true;
  } else {
    boton.disabled = false;
  }
}

// Detecta cambios en el <select> o <input> y verifica si hay que desactivar el botón
document.getElementById("operacion").addEventListener("change", verificarDivisionPorCero);
document.getElementById("num2").addEventListener("input", verificarDivisionPorCero);
