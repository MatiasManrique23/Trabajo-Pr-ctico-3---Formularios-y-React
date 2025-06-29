function Calculadora() {
  const [numero1, setNumero1] = React.useState("");
  const [numero2, setNumero2] = React.useState("");
  const [operacion, setOperacion] = React.useState("suma");
  const [resultado, setResultado] = React.useState("");
  const [botonDeshabilitado, setBotonDeshabilitado] = React.useState(false);
  const [mensajeDivisionCero, setMensajeDivisionCero] = React.useState("");

  React.useEffect(() => {
    const n2Parsed = parseFloat(numero2);

    if (operacion === "division" && n2Parsed === 0 && numero2 !== "" && numero2 !== "-") {
      setBotonDeshabilitado(true);
      setMensajeDivisionCero("No se puede dividir por cero.");
      setResultado("");
    } else if (numero1 === "" || numero2 === "" || isNaN(parseFloat(numero1)) || isNaN(parseFloat(numero2))) {
      setBotonDeshabilitado(true);
      setMensajeDivisionCero("");
    }
    else {
      setBotonDeshabilitado(false);
      setMensajeDivisionCero("");
    }
  }, [operacion, numero1, numero2]);

  function calcular() {
    const n1 = parseFloat(numero1);
    const n2 = parseFloat(numero2);

    if (botonDeshabilitado) {
      return;
    }

    let res;

    if (operacion === "suma") {
      res = n1 + n2;
    } else if (operacion === "resta") {
      res = n1 - n2;
    } else if (operacion === "multiplicacion") {
      res = n1 * n2;
    } else if (operacion === "division") {
      res = n1 / n2;
    }

    setResultado("Resultado: " + res);
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="number"
        value={numero1}
        onChange={(e) => setNumero1(e.target.value)}
        placeholder="Número 1"
      />
      <input
        type="number"
        value={numero2}
        onChange={(e) => setNumero2(e.target.value)}
        placeholder="Número 2"
      />
      <select value={operacion} onChange={(e) => setOperacion(e.target.value)}>
        <option value="suma">Suma</option>
        <option value="resta">Resta</option>
        <option value="multiplicacion">Multiplicación</option>
        <option value="division">División</option>
      </select>
      <button
        type="button"
        onClick={calcular}
        disabled={botonDeshabilitado}
      >
        Calcular
      </button>

      {mensajeDivisionCero && (
        <p className="error">{mensajeDivisionCero}</p>
      )}

      {resultado && !mensajeDivisionCero && (
        <p className="resultado">{resultado}</p>
      )}
    </form>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Calculadora />);