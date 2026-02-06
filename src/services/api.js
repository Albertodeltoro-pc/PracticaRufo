import { alumnosMock } from "./datosMock";

const BASE = "http://servidorclasedaw.onrender.com/alumno2";

async function intentarFetch(url, opciones = {}) {
  try {
    const res = await fetch(url, opciones);
    return await res.json();
  } catch (error) {
    console.warn("Servidor caído, usando datos locales");
    return null;
  }
}

export async function obtenerTodos() {
  const data = await intentarFetch(`${BASE}/alumnos`);
  return data || alumnosMock;
}

export async function obtenerAlumno(id) {
  const data = await intentarFetch(`${BASE}/alumnos/${id}`);

  if (data) return data;

  return alumnosMock.find(a => a.id === Number(id));
}

export async function crearAlumno(alumno) {
  const data = await intentarFetch(`${BASE}/alumnos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(alumno)
  });

  if (data) return data;

  // SIMULACIÓN LOCAL
  alumno.id = alumnosMock.length + 1;
  alumno.notas = [];
  alumnosMock.push(alumno);

  return alumno;
}

export async function borrarAlumno(id) {
  const data = await intentarFetch(`${BASE}/alumnos/${id}`, {
    method: "DELETE"
  });

  if (data) return data;

  // SIMULACIÓN LOCAL
  const index = alumnosMock.findIndex(a => a.id === Number(id));
  if (index !== -1) alumnosMock.splice(index, 1);

  return { ok: true };
}

export async function obtenerNotas(id) {
  const data = await intentarFetch(`${BASE}/alumnos/${id}/notas`);

  if (data) return data;

  const alumno = alumnosMock.find(a => a.id === Number(id));
  return alumno ? alumno.notas : [];
}
