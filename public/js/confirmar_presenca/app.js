import {submeterFormulario, validarCampoFormulario} from './validar.js';
import mascarar from './mascarar.js';
import util from './../comum/utilidades.js';

//inserindo nome no campo
let nomeCompleto = util.pegarParametroPagina("nome");
document.querySelector('[data-tipo="nome"]').value = nomeCompleto;


//atribuindo comportamento ao campo quando perde o foco
let inputs = document.querySelectorAll('[data-tipo]');
inputs.forEach(input => input.addEventListener('blur', evento => validarCampoFormulario(evento.target)))


//botão para submeter o formulário
let botao = document.querySelector('[data-botao]');
botao.addEventListener('click', () => {
	let inputsDeNovo = document.querySelectorAll('[data-tipo]'); //eu pego aqui de novo para incluir os campos do carro, caso seja acionado
	submeterFormulario(inputsDeNovo);
});


//comportamento do radio buton - pergunta sobre o carro e etc
let radios = document.querySelectorAll('[data-tipo="radio_carro"]'); //pega os elementos que contem a palavra 'radio_carro'
radios.forEach(radio => radio.addEventListener('change', evento => validarCampoFormulario(evento.target)));