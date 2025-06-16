"use client";

import React, { useState, useContext } from "react";
import Navbar from "@/componentes/Navbar";
import { ContextTarefa } from "@/data/ContextTarefa";

const NovaTarefaPage = () => {
  const { adicionarTarefa } = useContext(ContextTarefa);
  const [titulo, setTitulo] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (titulo.trim()) {
      adicionarTarefa(titulo);
      setMensagem("Tarefa adicionada com sucesso!");
      setTitulo("");
      setTimeout(() => setMensagem(""), 2000);
    } else {
      setMensagem("Digite um título para a tarefa.");
      setTimeout(() => setMensagem(""), 2000);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Adicionar Nova Tarefa</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Digite o título da tarefa"
            className="w-full p-2 border rounded mb-4"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Adicionar
          </button>
        </form>
        {mensagem && (
          <div className="mt-4 text-center text-sm text-green-700">{mensagem}</div>
        )}
      </div>
    </div>
  );
};

export default NovaTarefaPage;