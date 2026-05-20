import { useState } from "react";
import Listado from "./componentes/Listado";
import Formulario from "./componentes/Formulario";
import Filtro from "./componentes/Filtro";
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
  const [filtro, setFiltro] = useState("todas");

  const tareasFiltradas =
    filtro == "todas"
      ? tareas
      : tareas.filter((tarea) => tarea.categoria == filtro);

  const guardar = (tarea) => {
    let nuevasTareas = [...tareas];
    nuevasTareas.push(tarea);
    setTareas(nuevasTareas);
  };

  const eliminar = (tarea_id) => {
    const nuevasTareas = tareas.filter((tarea) => tarea.id != tarea_id);
    setTareas(nuevasTareas);
  };

  const cambiarEstado = (tarea_id) => {
    const nuevasTareas = tareas.map((tarea) => {
      if (tarea.id == tarea_id) {
        if (tarea.estado == "pendiente")
          return { ...tarea, estado: "en proceso" };
        if (tarea.estado == "en proceso")
          return { ...tarea, estado: "finalizado" };
      }
      return tarea;
    });
    setTareas(nuevasTareas);
  };

  return (
    <div>
      <div className="header">Control de Tareas</div>
      <div className="contenedor">
        <Listado
          tareas={tareasFiltradas}
          eliminar={(tarea_id) => eliminar(tarea_id)}
          cambiarEstado={(tarea_id) => cambiarEstado(tarea_id)}
        />
        <div className="sidebar">
          <Filtro setFiltro={setFiltro} />
          <Formulario guardar={(tarea) => guardar(tarea)} />
        </div>
      </div>
    </div>
  );
}
