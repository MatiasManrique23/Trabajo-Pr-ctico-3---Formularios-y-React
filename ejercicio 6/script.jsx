function CalculadoraIMC() {
  const [peso, setPeso] = React.useState("");
  const [altura, setAltura] = React.useState("");
  const [resultado, setResultado] = React.useState({ texto: "", color: "" });
  const [error, setError] = React.useState("");

  function calcularIMC() {
    const p = parseFloat(peso);
    const h = parseFloat(altura);

    if (isNaN(p) || isNaN(h)) {
      setError("Por favor ingrese números válidos.");
      setResultado({ texto: "", color: "" });
      return;
    }

    if (p <= 0 || h <= 0) {
      setError("Los valores deben ser mayores a 0.");
      setResultado({ texto: "", color: "" });
      return;
    }

    if (h > 2.5) {
      setError("La altura no puede ser mayor a 2.50 metros.");
      setResultado({ texto: "", color: "" });
      return;
    }

    setError(""); // limpiar errores anteriores

    const imc = p / (h * h);
    let mensaje = "";
    let color = "";

    if (imc < 18.5) {
      mensaje = "Nivel bajo";
      color = "yellow";
    } else if (imc < 25) {
      mensaje = "Nivel normal";
      color = "green";
    } else if (imc < 30) {
      mensaje = "Nivel de sobrepeso";
      color = "orange";
    } else {
      mensaje = "Nivel de obesidad";
      color = "red";
    }

    setResultado({
      texto: `IMC: ${imc.toFixed(2)} - ${mensaje}`,
      color: color,
    });
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="peso">Ingrese el peso (kg):</label>
      <input
        id="peso"
        type="number"
        step="any"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
        placeholder="Ej: 70"
        min="0"
      />

      <label htmlFor="altura">Ingrese la altura (m):</label>
      <input
        id="altura"
        type="number"
        step="any"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
        placeholder="Ej: 1.75"
        min="0"
        max="2.5"
      />

      <button
        type="button"
        onClick={calcularIMC}
        disabled={!peso || !altura}
      >
        Calcular
      </button>

      {error && <p className="error">{error}</p>}

      {resultado.texto && (
        <p className="resultado" style={{ color: resultado.color }}>
          {resultado.texto}
        </p>
      )}
    </form>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CalculadoraIMC />);
