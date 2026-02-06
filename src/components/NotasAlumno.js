import React, { useEffect, useState } from "react";
import { obtenerNotas } from "../services/api";

function NotasAlumno({ id }) {

  const [notas, setNotas] = useState([]);

  useEffect(() => {
    if (id) {
      obtenerNotas(id).then(data => setNotas(data));
    }
  }, [id]);

  if (!id) {
    return (
      <div className="card card-notas">
        <h3>Notas</h3>
        <p>Selecciona un alumno</p>
      </div>
    );
  }

  return (
    <div className="card card-notas">
      <h3>Notas</h3>

      <ul>
        {notas.map((nota, i) => (
          <li
            key={i}
            className={nota.nota === -1 ? "nota-pendiente" : "nota-ok"}
          >
            {nota.nombre}: {nota.nota === -1 ? "Sin calificar" : nota.nota}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NotasAlumno;
