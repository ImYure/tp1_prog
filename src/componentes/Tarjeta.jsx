export default function Tarjeta({ materia, estado, prioridad, categoria, eliminar, cambiarEstado  }) {
  return (
    <div className="tarjeta">
      <button className="eliminar" onClick={() => eliminar()}>X</button>
      <h3>{materia}</h3>
      <p>{estado}</p>
      <p>{prioridad}</p>
      <p>{categoria}</p>
      <button className="cambiarEstado" onClick={() => cambiarEstado()}>Cambiar estado</button>
    </div>
  );
}