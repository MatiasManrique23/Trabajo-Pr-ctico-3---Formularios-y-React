function Calculadora() {
  const [numero1, setNumero1] = React.useState("");
  const [numero2, setNumero2] = React.useState("");
  const [operacion, setOperacion] = React.useState("suma");
  const [resultado, setResultado] = React.useState("");

  function calcular() {
    const n1 = parseFloat(numero1);
    const n2 = parseFloat(numero2);
    let res = 0;

    if (operacion === "suma") {
      res = n1 + n2;
    } else if (operacion === "resta") {
      res = n1 - n2;
    } else if (operacion === "multiplicacion") {
      res = n1 * n2;
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
        disabled={operacion === "division"}
      >
        Calcular
      </button>

      {operacion === "division" && (
        <p className="error">No se puede calcular división</p>
      )}

      <p className="resultado">{resultado}</p>
    </form>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Calculadora />);
