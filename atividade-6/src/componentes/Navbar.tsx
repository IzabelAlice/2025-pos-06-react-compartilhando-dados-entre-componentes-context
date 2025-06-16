export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-30 py-4 border-gray-900 text-white bg-sky-900">
      <div className="font-bold text-xl">
        <h1 className="text-semibold">Tarefas</h1>
      </div>
      <div className="flex gap-4">
        <a href="/tarefas" className="no-underline bg-zinc-400 p-2 px-4 rounded text-black ">Tarefas</a>
        <a href="/tarefas/nova" className="no-underline bg-zinc-400 p-2 px-4 rounded text-black ">Nova Tarefa</a>
      </div>
    </nav>
  );
}