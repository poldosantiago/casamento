import util from './../comum/utilidades.js'
import service from './../comum/convidadoService.js'

//costumizando página dependendo do nubente
//addEventListener('DOMContentLoaded',carregarPagina());

//busca os dados do cliente e insere o nome dele no HTML
carregarConvidado(); 

function carregarPagina(){
	costumizarPagina();
}

function costumizarPagina(){
	const nubente = util.pegarParametroPagina('nubente');
	const classe = nubente=='noivo'?'--noivo':'--noiva';
	const pontosMudanca = document.querySelectorAll('[data-mudanca]');
	pontosMudanca.forEach(ponto => ponto.classList.add(classe));
}

async function carregarConvidado(){
	const idConvidado = util.pegarParametroPagina('id');
	const convidado = await service.buscarConvidado("id",idConvidado);
	inserirConvidadoHTML(convidado[0]);
}

function inserirConvidadoHTML(convidado){
	document.querySelector('[data-nome-convidado]').innerHTML = util.pegarPrimeiroNomeFormatado(convidado.nome);
	if(document.body.contains(document.querySelector('[data-tipo="nome"]'))){
		document.querySelector('[data-tipo="nome"]').value = convidado.nome;
	}
}

