function validarPlaca(input){
	const placa = input.value.toUpperCase();
	let mensagem = 'placa inválida';
	if(verificarPadraoAntigo(placa)){
		mensagem = ``;
	}
	else if(verificarPadraoNovo(placa)){
		mensagem = ``;
	}

	input.setCustomValidity(mensagem);
}

function verificarPadraoAntigo(placa){
	const regex = /[A-Z]{3}-[0-9]{4}/;
	return regex.test(placa);
}

function verificarPadraoNovo(placa){
	const regex = /[A-Z]{3}[0-9][0-9A-Z][0-9]{2}/;
	return regex.test(placa);
}

export default validarPlaca;	

//console.log(verificarPlacaPadraoAntigo('LPT-4625'))

//BRA2E19

