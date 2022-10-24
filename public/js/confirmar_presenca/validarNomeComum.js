import util from './../comum/utilidades.js'

//uso para validar os campos cor e modelo
function validarNomeComum(input,tipoDoNome){
	const nome = input.value;
	let mensagem = '';
	if(!util.validarNome(nome)){
		mensagem = `${tipoDoNome} iválido`;
	}

	input.setCustomValidity(mensagem);
}

export default validarNomeComum;