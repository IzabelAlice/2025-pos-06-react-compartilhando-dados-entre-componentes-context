
const dados: Array<TarefaInterface> = [
	{ id: 1, title: "delectus aut autem", completed: false },
	{
		id: 2,
		title: "apooooooooooooooooooooo",
		completed: false,
	},
];

const carregar = (): Promise<TarefaInterface[]> => {
	return new Promise((resolve, reject) => {

		const sucesso = true;

		if (sucesso) {
			resolve(dados);
		} else {
			reject(new Error("Erro 500: Falha ao carregar dados da API"));
		}
	});
};

const adicionar = (novaTarefa: TarefaInterface) => {
	return new Promise((resolve, reject) => {
		const sucesso = true;

		if (sucesso) {
			dados.push(novaTarefa);
			resolve(novaTarefa);
		} else {
			reject(new Error("Erro 500: Falha ao adicionar tarefa"));
		}
	});
};

export { carregar, adicionar };

export default dados;
