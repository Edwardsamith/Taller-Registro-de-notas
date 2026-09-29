function Estudiante({ nombre, nota, index, onEliminar }) {
  return (
    <div>
      <p>Nombre: {nombre}</p>
      <p>Nota: {nota}</p>
      <p>{nota >= 3 ? "Estudiante Aprobado" : "Estudiante Reprobado"}</p>
      <button onClick={() => onEliminar(index)}>Eliminar</button>
    </div>
  );
}

export default Estudiante;