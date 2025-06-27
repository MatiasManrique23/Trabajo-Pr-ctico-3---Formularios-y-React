function BotonesAlternados() {
  // Estado: true si el botón izquierdo está habilitado
  const [activoIzquierdo, setActivoIzquierdo] = React.useState(true);

  // Al presionar el izquierdo, lo desactiva y activa el derecho
  const manejarClickIzquierdo = () => {
    setActivoIzquierdo(false);
  };

  // Al presionar el derecho, lo desactiva y activa el izquierdo
  const manejarClickDerecho = () => {
    setActivoIzquierdo(true);
  };

  return (
    <div className="contenedor">
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
    </div>
  );
}

// Render del componente en el div con id "root"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BotonesAlternados />);
