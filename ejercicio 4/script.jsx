function BotonesAlternados() {
  // Estado inicial: botón izquierdo activo
  const [activoIzquierdo, setActivoIzquierdo] = React.useState(true);

  // Manejador de evento para botón izquierdo
  const manejarClickIzquierdo = (e) => {
    e.preventDefault(); // Evita comportamiento por defecto del formulario
    setActivoIzquierdo(false); // Desactiva izquierdo, activa derecho
  };

  // Manejador de evento para botón derecho
  const manejarClickDerecho = (e) => {
    e.preventDefault();
    setActivoIzquierdo(true); // Desactiva derecho, activa izquierdo
  };

  return (
    <form>
      <button
        onClick={manejarClickIzquierdo}
        disabled={!activoIzquierdo}
        className={activoIzquierdo ? "activo" : ""}
      >
        Izquierdo
      </button>

      <button
        onClick={manejarClickDerecho}
        disabled={activoIzquierdo}
        className={!activoIzquierdo ? "activo" : ""}
      >
        Derecho
      </button>
    </form>
  );
}

// Render del componente
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BotonesAlternados />);
