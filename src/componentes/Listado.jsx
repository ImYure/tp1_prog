import Tarjeta from "./Tarjeta";

export default function Listado({ tareas }) {
  return (
    <div className="listado">
      {tareas.map((tarea) => (
        <Tarjeta
          key={tarea.id}
          materia={tarea.materia}
          estado={tarea.estado}
          prioridad={tarea.prioridad}
          categoria={tarea.categoria}
        />
      ))}
    </div>
  );
}
