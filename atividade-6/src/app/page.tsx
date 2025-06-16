"use client";

import React from "react";
import BotaoLink from "@/componentes/Botão_link";

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-300">
      <h1 className="text-2xl font-bold mb-4">Página Inicial</h1>
      <h2 className="text-xl p-5">Clique no botão para acessar a lista de tarefas</h2>
      <BotaoLink href="/tarefas">
        Clique aqui
      </BotaoLink>
    </main>
  );
};

export default Home;