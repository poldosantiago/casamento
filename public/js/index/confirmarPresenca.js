import dispararAlerta from './../comum/dispararAlerta.js';
import service from './../comum/convidadoService.js';
import util from './../comum/utilidades.js';

function confirmarPresenca(btn){
	let input = btn.previousElementSibling;
	let nomeDigitado = input.value.trim().toUpperCase();

	//se o nome não está de acordo...
	if(!util.validarNome(nomeDigitado)){
		dispararAlerta('nome inválido! Digite o nome completo');
		input.value = '';
		input.focus();
	}
	else{
		validarConvidado(nomeDigitado);
	}
}

async function validarConvidado(nome){
	try {
		let convidadoEncontrado = await service.buscarConvidado("nome",nome); //solucao antiga
		
		//se achou...
		if(convidadoEncontrado.length > 0){
			window.location.href = `confirmacao_encerramento.html?id=${convidadoEncontrado[0].id}`;
		}
		//se não achou...
		else{
			const nomeCompleto = document.querySelector('[data-nome-completo]'); 
			window.location.href = `confirmacao_formulario.html?nome=${nomeCompleto.value}`;
		}
	}
	catch(erro){
		console.log(erro);
	}
}

export default confirmarPresenca;