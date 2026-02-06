import React, { useState } from "react";
import { crearAlumno } from "../services/api";

function CrearAlumno({ mensaje }) {

  const [nombre, setNombre] = useState("");
  const [apellido1, setApellido1] = useState("");
  const [apellido2, setApellido2] = useState("");
  const [edad, setEdad] = useState("");
  const [sexo, setSexo] = useState("");
  const [curso, setCurso] = useState("");

  const enviar = () => {

    if (!nombre || !apellido1 || !apellido2 || !edad || !sexo || !curso) {
      mensaje("Debes rellenar todos los campos", "error");
      return;
    }

    const nuevoAlumno = {
      nombre,
      apellido1,
      apellido2,
      edad: Number(edad),
      sexo,
      curso: Number(curso)
    };

    crearAlumno(nuevoAlumno)
      .then(res => res.json())
      .then(data => {
        mensaje("Alumno creado con ID: " + data.id);
        setNombre("");
        setApellido1("");
        setApellido2("");
        setEdad("");
        setSexo("");
        setCurso("");
      })
      .catch(() => mensaje("Error al crear alumno", "error"));
  };

  return (
    <div className="card card-accion">
      <h3>Crear Alumno</h3>

      <label>Nombre</label>
      <input value={nombre} onChange={(e) => setNombre(e.target.value)} />

      <label>Primer apellido</label>
      <input value={apellido1} onChange={(e) => setApellido1(e.target.value)} />

      <label>Segundo apellido</label>
      <input value={apellido2} onChange={(e) => setApellido2(e.target.value)} />

      <label>Edad</label>
      <input value={edad} onChange={(e) => setEdad(e.target.value)} />

      <label>Sexo</label>
      <select value={sexo} onChange={(e) => setSexo(e.target.value)}>
        <option value="">Selecciona</option>
        <option value="M">Masculino</option>
        <option value="F">Femenino</option>
      </select>

      <label>Curso</label>
      <select value={curso} onChange={(e) => setCurso(e.target.value)}>
        <option value="">Selecciona</option>
        <option value="1">1º DAW</option>
        <option value="2">2º DAW</option>
      </select>

      <button onClick={enviar}>Crear</button>
    </div>
  );
}

export default CrearAlumno;
