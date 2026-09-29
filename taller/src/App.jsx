import Estudiante from "./components/Estudiante";
import { useState } from "react";

function App() {
  const [estudiantes, setEstudiantes] = useState([
    { nombre: "Juan", nota: 3.5 },
    { nombre: "Willy", nota: 2.0 },
    { nombre: "Hencker", nota: 4.0 },
    { nombre: "Arith", nota: 4.8 },
    { nombre: "Yulian", nota: 2.5 },
  ]);
  const [nombre, setnombre] = useState("");
  const [nota, setnota] = useState("");

  const nuevoEstudiante = (e) => {
    e.preventDefault();

    const estudiante = {
      nombre,
      nota: parseFloat(nota),
    };

    setEstudiantes([...estudiantes, estudiante]);
    setnombre("");
    setnota("");
  };

  const promedio =
    estudiantes.reduce(
      (acumulador, estudiante) => acumulador + estudiante.nota,
      0,
    ) / estudiantes.length;

  return (
    <>
      <h1>Lista de Estudiantes</h1>
      <p>Promedio de estudiantes: {promedio.toFixed(2)}</p>
      <form onSubmit={nuevoEstudiante}>
        <input
          type="text"
          placeholder="Nombre del estudiante"
          value={nombre}
          onChange={(e) => setnombre(e.target.value)}
        />
        <input
          type="number"
          placeholder="Nota del estudiante"
          value={nota}
          min="0"
          max="5"
          step="0.1"
          onChange={(e) => setnota(e.target.value)}
        />
        <button type="submit">Agregar Estudiante</button>
      </form>

      {estudiantes.map((estudiante, index) => (
        <Estudiante
          key={index}
          nombre={`#${index + 1} ${estudiante.nombre}`} // aquí agregamos el número
          nota={estudiante.nota}
        />
      ))}
    </>
  );
}

export default App;
