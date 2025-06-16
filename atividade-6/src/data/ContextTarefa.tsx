"use client";
import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { TarefaInterface } from "@/types/tarefa";

interface ContextTarefaProps {
  tarefas: TarefaInterface[];
  adicionarTarefa: (titulo: string) => void;
}

export const ContextTarefa = createContext<ContextTarefaProps>({
  tarefas: [],
  adicionarTarefa: () => {},
});

export const ContextTarefaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tarefas, setTarefas] = useState<TarefaInterface[]>([]);

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
      id: Date.now(), // id único
      title: titulo,
      completed: false,
    };
    setTarefas((prev) => [novaTarefa, ...prev]);
  };

  return (
    <ContextTarefa.Provider value={{ tarefas, adicionarTarefa }}>
      {children}
    </ContextTarefa.Provider>
  );
};