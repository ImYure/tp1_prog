export default function Tarjeta({ materia, estado, prioridad, categoria }) {
  return (
    <div className="tarjeta">
      <h3>{materia}</h3>
      <p>{estado}</p>
      <p>{prioridad}</p>
      <p>{categoria}</p>
    </div>
  );
}