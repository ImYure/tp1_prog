import { useState } from "react";
import Listado from "./componentes/Listado";
import Formulario from "./componentes/Formulario";
import "./App.css"

export default function App() {
  const tareasDefault = [
    {
      id: 1,
      materia: "programacion",
      estado: "pendiente",
      prioridad: "Alta",
      categoria: "Escolar",
    },
  ];

  const [tareas, setTareas] = useState(tareasDefault);

  const guardar = (tarea) => {
    let nuevasTareas = [...tareas];
    nuevasTareas.push(tarea);
    setTareas(nuevasTareas);
  };

  const eliminar = (tarea_id) => {
    const nuevasTareas = tareas.filter((tarea) => tarea.id != tarea_id);
    setTareas(nuevasTareas);
  };

  return (
    <div>
      <div className="header">Control de Tareas</div>
      <div className="contenedor">
        <Listado
          tareas={tareanusDefault}
          eliminar={(tarea_id) => eliminar(tarea_id)}
        />
        <div className="sidebar">
          <Formulario guardar={(tarea) => guardar(tarea)} />
        </div>
      </div>
    </div>
  );
}
