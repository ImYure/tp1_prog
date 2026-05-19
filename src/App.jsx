import { useState } from "react";
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
  return (
    <div>
      <div className="header">Control de Tareas</div>
      <div className="contenedor">
        <Listado
          tareas={tareasDefault}
        />
      </div>
    </div>
  );
}
