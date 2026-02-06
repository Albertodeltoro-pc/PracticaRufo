import React, { useEffect, useState } from "react";
import { obtenerAlumno } from "../services/api";

function AlumnoDetalle({ id }) {

  const [alumno, setAlumno] = useState(null);

  useEffect(() => {
    if (id) {
      obtenerAlumno(id).then(data => setAlumno(data));
    }
  }, [id]);

  if (!id) {
    return (
      <div className="card card-info">
        <h3>Datos del Alumno</h3>
        <p>Selecciona un alumno</p>
      </div>
    );
  }

  if (!alumno) return null;

  return (
    <div className="card card-info">
      <h3>Datos del Alumno</h3>

      <p><strong>Nombre:</strong> {alumno.nombre}</p>
      <p><strong>Edad:</strong> {alumno.edad} años</p>
      <p><strong>Curso:</strong> {alumno.curso}º DAW</p>
    </div>
  );
}

export default AlumnoDetalle;
