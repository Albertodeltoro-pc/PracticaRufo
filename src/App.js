import React, { useState } from "react";
import ListarAlumnos from "./components/ListarAlumnos";

import BuscarAlumno from "./components/BuscarAlumno";
import CrearAlumno from "./components/CrearAlumno";
import EliminarAlumno from "./components/EliminarAlumno";
import AlumnoDetalle from "./components/AlumnoDetalle";
import NotasAlumno from "./components/NotasAlumno";

import "./App.css";



function App() {
  const [alumnoID, setAlumnoID] = useState(null);
  const [mensaje, setMensaje] = useState("");
  const [tipoMensaje, setTipoMensaje] = useState("ok");

  const mostrarMensaje = (texto, tipo = "ok") => {
    setMensaje(texto);
    setTipoMensaje(tipo);
    setTimeout(() => setMensaje(""), 3000);
  };

  return (
    <div className="app">

      <header className="header">
        <h1>Gestión de Alumnos</h1>
        <p>Aplicación React · DAW</p>
      </header>

      {mensaje && (
        <div className={`mensaje ${tipoMensaje}`}>
          {mensaje}
        </div>
      )}

    <section className="grid-acciones">
  <BuscarAlumno seleccionar={setAlumnoID} />
  <CrearAlumno mensaje={mostrarMensaje} />
  <EliminarAlumno mensaje={mostrarMensaje} />
  <ListarAlumnos seleccionar={setAlumnoID} />
</section>

      <section className="grid-info">
        <AlumnoDetalle id={alumnoID} />
        <NotasAlumno id={alumnoID} />
      </section>

      <footer className="footer">
        Proyecto React · Gestión Académica · DAW
      </footer>

    </div>
  );
}

export default App;
