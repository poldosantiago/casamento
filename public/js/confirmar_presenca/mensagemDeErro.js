export function mostrarMensagemDeErro(tipoDeInput,input){
	let mensagem = '';

	tiposDeErro.forEach(erro => {
		if(input.validity[erro]){
			mensagem = mensagemDeErro[tipoDeInput][erro]
		}
	});

	return mensagem;
}

const tiposDeErro = [
	'customError',
	'valueMissing',
	'typeMismatch',
	'patternMismatch',
	'rangeOverflow',
	'rangeUnderflow'
]

const mensagemDeErro = {
	nome: {
		customError: "O nome digitado não é válido",
		valueMissing: "O campo de nome não pode estar vazio"
	},
	email: {
		customError: "O email digitado não é válido",
		valueMissing: "O campo de email não pode estar vazio"
	},
	telefone: {
		valueMissing: "O campo de telefone não pode estar vazio",
		customError: "telefone inválido - exemplo aceito: (99)9999-9999"
	},
	adultos: {
		valueMissing: "Digite o número de crianças acompanhantes - digite 0 caso nã há acompanhantes",
		rangeOverflow: "quantidade de acompanhantes acima do permitido",
		rangeUnderflow: "quantidade de acompanhantes negativo. Insira 0 (zero) caso não há acompanhantes"
	},
	criancas: {
		valueMissing: "Digite o número de crianças acompanhantes - digite 0 (zero) caso vá nenhuma",
		rangeOverflow: "quantidade de crianças acima do permitido",
		rangeUnderflow: "quantidade de crianças negativa. Insira 0 (zero) caso não há acompanhantes"
	},
	modelo: {
		valueMissing: "O campo de modelo não pode estar vazio",
		customError: "Modelo não é válido"
	},
	cor: {
		valueMissing: "O campo de cep não pode estar vazio",
		customError: "Cor não é válida"
	},
	placa: {
		valueMissing: "O campo de placa não pode estar vazio",
		customError: "Padrão de placa não válida"
	}
};

export default mostrarMensagemDeErro;