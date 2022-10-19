import service from './../comum/convidadoService.js';
import util from './../comum/utilidades.js'

addEventListener('DOMContentLoaded',carregarConvidado());

async function carregarConvidado(){
	try {
		const id = util.pegarParametroPagina("id");
		const convidado = await service.buscarConvidado("id",id);
		convidado = convidado[0];

		console.log(convidado);
		inserirConvidado(convidado)

	} 
	catch(erro) {
		console.log(erro);
	}
}

function inserirConvidado(convidado){
	const body = document.querySelector('[data-corpo]');
	body.innerHTML = convidado.nome;
}