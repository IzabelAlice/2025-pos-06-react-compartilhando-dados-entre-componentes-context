"use client";

import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
import { TarefaInterface } from "@/data";
import Cabecalho from "@/componentes/Cabecalho";
import ModalTarefa from "@/componentes/Add_tarefa";


interface Tarefa {
  titulo: string;
  concluido?: boolean;
}

const Tarefa: React.FC<Tarefa> = ({ titulo, concluido }) => {
  const [estaConcluido, setEstaConcluido] = useState(concluido);

  const classe = `p-3 mb-3 rounded-lg shadow-md hover:cursor-pointer hover:border ${
    estaConcluido
      ? "bg-gray-800 hover:border-gray-800"
      : "bg-gray-400 hover:border-gray-400"
  }`;

  const escutarClique = () => {
    setEstaConcluido(!estaConcluido);
  };

  return (
    <div className={classe} onClick={escutarClique}>
      <h3 className="text-xl font-bold">{titulo}</h3>
      <p className="text-sm">{estaConcluido ? "Concluída" : "Pendente"}</p>
    </div>
  );
};

interface Tarefas {
  dados: TarefaInterface[];
}

const Tarefas: React.FC<Tarefas> = ({ dados }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {dados.map((tarefa) => (
        <Tarefa
          key={tarefa.id}
          titulo={tarefa.title}
          concluido={tarefa.completed}
        />
      ))}
    </div>
  );
};



const Home = () => {
  const [tarefas, setTarefas] = useState<TarefaInterface[]>([]);
  const [mostrarModal, setMostrarModal] = useState(false);
   useEffect(() => {
    axios.get("https://dummyjson.com/todos")
      .then((response) => {
        const tarefasData: TarefaInterface[] = response.data.todos.map((tarefa: any) => ({
          id: tarefa.id,
          title: tarefa.todo,
          completed: tarefa.completed,
        }));
        setTarefas(tarefasData);
      })
      .catch((error) => {
        console.error("Erro ao buscar tarefas:", error);
      });
    }, []);

  const adicionarTarefa = (titulo: string) => {
    const novaTarefa: TarefaInterface = {
      id: Date.now(),
      title: titulo,
      completed: false,
    };
    setTarefas((prev) => [novaTarefa, ...prev]);
  };

  return (
    <div className="container mx-auto p-4">
      <Cabecalho />
      <button
        className="mb-4 px-4 py-2 bg-slate-600 text-white rounded hover:bg-slate-700"
        onClick={() => setMostrarModal(true)}
      >
        Nova Tarefa
      </button>
      {mostrarModal && (
        <ModalTarefa
          onFechar={() => setMostrarModal(false)}
          onAdicionar={adicionarTarefa}
        />
      )}
      <Tarefas dados={tarefas} />
    </div>
  );
};

export default Home;