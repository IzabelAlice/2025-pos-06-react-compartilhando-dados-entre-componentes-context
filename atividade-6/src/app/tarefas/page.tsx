"use client";

import React, { useEffect } from "react";
import axios from "axios";
import { TarefaInterface } from "@/types/tarefa";
import { useTarefas } from "@/data/ContextTarefa";
import Cabecalho from "@/componentes/Cabecalho";
import Navbar from "@/componentes/Navbar";


interface TarefaProps {
  id: number;
  titulo: string;
  concluido?: boolean;
}

const Tarefa: React.FC<TarefaProps> = ({ id, titulo, concluido }) => {
  const { tarefas, setTarefas } = useTarefas();

  const classe = `p-3 mb-3 rounded-lg shadow-md hover:cursor-pointer hover:border ${
    concluido
      ? "bg-gray-800 hover:border-gray-800"
      : "bg-gray-400 hover:border-gray-400"
  }`;

  const escutarClique = () => {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id
          ? { ...tarefa, completed: !tarefa.completed }
          : tarefa
      )
    );
  };

  return (
    <div className={classe} onClick={escutarClique}>
      <h3 className="text-xl font-bold">{titulo}</h3>
      <p className="text-sm">{concluido ? "Concluída" : "Pendente"}</p>
    </div>
  );
};


interface TarefasProps {
  dados: TarefaInterface[];
}

const Tarefas: React.FC<TarefasProps> = ({ dados }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
      {dados.map((tarefa) => (
        <Tarefa
          key={tarefa.id}
          id={tarefa.id}
          titulo={tarefa.title}
          concluido={tarefa.completed}
        />
      ))}
    </div>
  );
};

const Home = () => {
  const { tarefas, setTarefas } = useTarefas();

  useEffect(() => {
    if (tarefas.length === 0) {
      axios.get("https://dummyjson.com/todos")
        .then((response) => {
          const tarefasAPI: TarefaInterface[] = response.data.todos.map((tarefa: any) => ({
            id: tarefa.id,
            title: tarefa.todo,
            completed: tarefa.completed,
          }));
          setTarefas(tarefasAPI);
        })
        .catch((error) => {
          console.error("Erro ao buscar tarefas:", error);
        });
    }
  }, [tarefas.length, setTarefas]);

  return (
    <div>
      <Navbar />
      <Cabecalho />
      <Tarefas dados={tarefas} />
    </div>
  );
};

export default Home;