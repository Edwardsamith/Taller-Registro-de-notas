function Estudiante({ nombre, nota }) {
  return (
    <div>
      <p>Nombre: {nombre}</p>
      <p>Nota: {nota}</p>
      <p>{nota >= 3 ? "Estudiante Aprobado" : "Estudiante Reprobado"}</p>
    </div>
  );
}

export default Estudiante;