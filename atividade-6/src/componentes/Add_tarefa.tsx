import React, { useState } from "react";

interface ModalTarefaProps {
  onFechar: () => void;
  onAdicionar: (titulo: string) => void;
}

const ModalTarefa: React.FC<ModalTarefaProps> = ({ onFechar, onAdicionar }) => {
  const [titulo, setTitulo] = useState("");

  const handleAdicionar = () => {
    if (titulo.trim()) {
      onAdicionar(titulo);
      setTitulo("");
      onFechar();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Add Tarefa</h2>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Digite o título da tarefa"
          className="w-full p-2 border rounded mb-4"
        />
        <div className="flex justify-end gap-2">
          <button
            onClick={onFechar}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Fechar
          </button>
          <button
            onClick={handleAdicionar}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalTarefa;