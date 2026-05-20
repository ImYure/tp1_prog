export default function Filtro({ setFiltro }) {
  return (
    <div className="filtro">
      <button onClick={() => setFiltro("todas")}>Todas</button>
      <button onClick={() => setFiltro("Escolar")}>Escolar</button>
      <button onClick={() => setFiltro("Personal")}>Personal</button>
    </div>
  );
}