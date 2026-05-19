import { useState } from "react";

export default function Formulario({ guardar }) {
  const [materia, setMateria] = useState("");
  const [prioridad, setPrioridad] = useState("Alta");
  const [categoria, setCategoria] = useState("Escolar");

  const handleGuardar = (e) => {
    e.preventDefault();
    const nuevaTarea = {
      id: new Date().getTime(),
      materia: materia,
      estado: "pendiente",
      prioridad: prioridad,
      categoria: categoria,
    };

    guardar(nuevaTarea);
  };

  return (
    
    <form className="formulario" onSubmit={handleGuardar}>
      <h2>Nueva tarea</h2>
      <input
        type="text"
        placeholder="Materia"
        value={materia}
        onChange={(e) => setMateria(e.target.value)}
      />
      <select value={prioridad} onChange={(e) => setPrioridad(e.target.value)}>
        <option value="Alta">Alta</option>
        <option value="Media">Media</option>
        <option value="Baja">Baja</option>
      </select>
      <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
        <option value="Escolar">Escolar</option>
        <option value="Personal">Personal</option>
      </select>
      <button onClick={handleGuardar}>Guardar</button>
    </form>
  );
}