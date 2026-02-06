import React, { useEffect, useState } from "react";
import { obtenerTodos } from "../services/api";

function ListarAlumnos({ seleccionar }) {

  const [alumnos, setAlumnos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    obtenerTodos()
      .then(data => {
        console.log("Datos recibidos:", data);
        setAlumnos(data);   // LA API DEVUELVE UN ARRAY DIRECTO
        setCargando(false);
      })
      .catch(() => setCargando(false));
  }, []);

  return (
    <div className="card card-accion">
      <h3>Listado de Alumnos</h3>

      {cargando && <p>Cargando...</p>}

      {!cargando && alumnos.length === 0 && (
        <p>No hay alumnos</p>
      )}

      {!cargando && alumnos.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Curso</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {alumnos.map(a => (
              <tr key={a.id}>
                <td>{a.id}</td>
                <td>{a.nombre} {a.apellido1} {a.apellido2}</td>
                <td>{a.curso}</td>
                <td>
                  <button onClick={() => seleccionar(a.id)}>
                    Ver
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ListarAlumnos;
