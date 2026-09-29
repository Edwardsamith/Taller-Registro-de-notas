
import Estudiante from "./components/Estudiante";

function App() {

  const [estudiantes, setEstudiantes] = [
    { nombre: "Juan", nota: 3.5 },
    { nombre: "Willy", nota: 3.0 },
    { nombre: "Hencker", nota: 4.0 },
    { nombre: "Arith", nota: 4.8 },
    { nombre: "Yulian", nota: 3.0 },
  ];

  return (
    <>
      {estudiantes.map((estudiante, index) => (
        <Estudiante key={index} nombre={estudiante.nombre} nota={estudiante.nota} />))
      }
    </>
  )
}

export default App
