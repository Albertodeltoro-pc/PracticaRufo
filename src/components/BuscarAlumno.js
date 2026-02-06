import React, { useState } from "react";

function BuscarAlumno({ seleccionar }) {

  const [id, setId] = useState("");

  return (
    <div className="card">
      <h3>Buscar Alumno</h3>

      <input
        placeholder="ID del alumno"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      <button onClick={() => seleccionar(id)}>
        Cargar
      </button>
    </div>
  );
}

export default BuscarAlumno;
