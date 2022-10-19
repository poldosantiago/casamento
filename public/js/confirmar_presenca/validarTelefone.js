function validarTelefone(input){
	const telefone = input.value;
	let mensagem = '';
	if(!verificarTelefone(telefone)){
		mensagem = 'telefone inválido';
	}

	input.setCustomValidity(mensagem);
}

function verificarTelefone(telefone){
	const regex = /\(?\d{2}\)?\s?(\d{4,5}\-?\d{4})/;
	return regex.test(telefone);
}

export default validarTelefone;


