import {submeterFormulario, validarCampoFormulario} from './validar.js';
import mascarar from './mascarar.js';
import util from './../comum/utilidades.js';

//inserindo nome no campo
let nomeCompleto = util.pegarParametroPagina("nome");
document.querySelector('[data-tipo="nome"]').value = nomeCompleto;


let inputs = document.querySelectorAll('[data-tipo]');
//atribuindo comportamento ao campo quando perde o foco
inputs.forEach(input => input.addEventListener('blur', evento => validarCampoFormulario(evento.target)))

let botao = document.querySelector('[data-botao]');
botao.addEventListener('click', () => submeterFormulario(inputs));

let radios = document.querySelectorAll('[data-tipo="radio_carro"]'); //pega os elementos que contem a palavra 'radio_carro'
radios.forEach(radio => radio.addEventListener('change', evento => validarCampoFormulario(evento.target)));