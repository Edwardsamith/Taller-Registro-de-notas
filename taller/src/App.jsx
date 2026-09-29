import Estudiante from "./components/Estudiante";

function App() {

  const estudiantes = [
    { nombre: "Juan", nota: 3.5 },
    { nombre: "Willy", nota: 2.0 },
    { nombre: "Hencker", nota: 4.0 },
    { nombre: "Arith", nota: 4.8 },
    { nombre: "Yulian", nota: 2.5 },
  ];

  const promedio = estudiantes.reduce((acumulador, estudiante) => acumulador + estudiante.nota, 0) / estudiantes.length;

  return (
    <>
      <h1>Lista de Estudiantes</h1>
      <p>Promedio de estudiantes: {promedio.toFixed(2)}</p>
      {estudiantes.map((estudiante, index) => (
        <Estudiante
          key={index}
          nombre={estudiante.nombre}
          nota={estudiante.nota}
        />
      ))}
    </>
  );
}

export default App;