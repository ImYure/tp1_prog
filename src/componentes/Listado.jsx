import Tarjeta from "./Tarjeta";

export default function Listado({ tareas, eliminar, cambiarEstado }) {
  return (
    <div className="listado">
      {tareas.map((tarea) => (
        <Tarjeta
          key={tarea.id}
          materia={tarea.materia}
          estado={tarea.estado}
          prioridad={tarea.prioridad}
          categoria={tarea.categoria}
          eliminar={() => eliminar(tarea.id)}
          cambiarEstado={() => cambiarEstado(tarea.id)}
        />
      ))}
    </div>
  );
}
