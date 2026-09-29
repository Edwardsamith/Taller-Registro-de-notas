function Estudiante({ nombre, nota }) {
  return (
    <div>
      <h1>Estudiante</h1>
      <p>Nombre: {nombre}</p>
      <p>Nota: {nota}</p>
      <p>{nota >= 3 ? "Estudiante Aprobado" : "Estudiante Reprobado"}</p>
    </div>
  );
}

export default Estudiante;