import React, { useState } from "react";
import { borrarAlumno } from "../services/api";

function EliminarAlumno({ mensaje }) {

  const [id, setId] = useState("");

  const eliminar = () => {

    if (!id) {
      mensaje("Debes indicar un ID", "error");
      return;
    }

    borrarAlumno(id).then(res => {
      if (res.ok) {
        mensaje("Alumno eliminado correctamente", "ok");
        setId("");
      } else {
        mensaje("Error al eliminar alumno", "error");
      }
    });
  };

  return (
    <div className="card">
      <h3>Eliminar Alumno</h3>

      <input
        placeholder="ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      <button onClick={eliminar}>Eliminar</button>
    </div>
  );
}

export default EliminarAlumno;
