function validarModeloCarro(input){
	const modeloCarro = input.value;
	let mensagem = '';
	if(!verificarModeloCarro(modeloCarro)){
		mensagem = 'nome de carro inválido';
	}

	input.setCustomValidity(mensagem);
}

function verificarModeloCarro(modeloCarro){
	modeloCarro = modeloCarro.trim(); //remove espaço dos lados
	const regex = new RegExp(/^[0-9a-zA-ZÁÉÍÓÚÃÕÊËÇáéíóúãêëç]+(([\'\,\.\- ][0-9a-zA-ZÁÉÍÓÚÃÕÊËÇáéíóúãêëç])?[0-9a-zA-ZÁÉÍÓÚÃÕÊËÇáéíóúãêëç]*)*$/,'g'); // valida nome próprio
	return regex.test(modeloCarro);
}

export default validarModeloCarro;