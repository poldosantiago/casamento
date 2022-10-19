function validarEmail(input){
	const email = input.value;
	let mensagem = '';
	if(!verificarEmail(email)){
		mensagem = 'e-mail inválido';
	}

	input.setCustomValidity(mensagem);
}

function verificarEmail(email){
  const regex = /^[a-z0-9.\-_]+@[a-z0-9\-]+\.[a-z]+(\.[a-z]+)?$/i;
  return regex.test(email);
}

export default validarEmail;