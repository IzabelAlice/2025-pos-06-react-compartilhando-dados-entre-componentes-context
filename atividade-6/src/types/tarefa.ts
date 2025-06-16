export interface TarefaInterface {
  id: number;
  title: string;
  completed: boolean;
}

export type ListaDeTarefas = TarefaInterface[];