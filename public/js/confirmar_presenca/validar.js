import util from './../comum/utilidades.js'
import service from './../comum/convidadoService.js';
import validarEmail from './validarEmail.js';
import validarTelefone from './validarTelefone.js';
import validarNomeComum from './validarNomeComum.js';
import validarPlaca from './validarPlaca.js';
import mostrarMensagemDeErro from './mensagemDeErro.js';
import mostrarAreaCamposCarro from './mostrarAreaCamposCarro.js';


export function validarCampoFormulario(input){
	const tipoDeInput = input.dataset.tipo;

	//validando os inputs
	if(validadores[tipoDeInput]){
		validadores[tipoDeInput](input);
	}

	//mostrando ou ocultando a mensagem de erro
	if(input.validity.valid){
		input.parentElement.classList.remove('formulario__container--erro');
	}
	else{
		input.parentElement.classList.add('formulario__container--erro');	
		input.parentElement.querySelector('.formulario__mensagem_erro').innerHTML = mostrarMensagemDeErro(tipoDeInput,input);	
	}
}

const validadores = {
	nome: input => validarNomeComum(input),
	email: input => validarEmail(input),
	telefone: input => validarTelefone(input),
	modelo: input => validarNomeComum(input,'modelo'),
	condutor: input => validarNomeComum(input,'condutor'),
	placa: input => validarPlaca(input),
	radio_carro: input => mostrarAreaCamposCarro(input)
}

//-----------------------------

//percondutorre cada input e verifica se está válido
function validarFormulario(inputs){
	let valido = true;

	inputs.forEach(input => {
		if(!input.validity.valid){
			valido = false;
		}	
	})
	return valido;
}

function criarObjetoConvidado(){
	return {
			"nome": "",
			"email": "",
			"telefone": "",
			"adultos": 0,
			"criancas": 0,
			"modelo": "",
			"condutor": "",
			"placa": ""
		};	
}

const tiposDeCampos = [
	'nome',
	'email',
	'telefone',
	'adultos',
	'criancas',
	'modelo',
	'condutor',
	'placa'
];

function preencherObjetoConvidado(inputs){
	let convidadoPreenchido = criarObjetoConvidado();
	
	tiposDeCampos.forEach(campo => {
		inputs.forEach(input => {
			if(input.dataset.tipo == campo){
				convidadoPreenchido[campo] = input.value.toUpperCase();

				if(input.dataset.tipo === 'telefone'){
					convidadoPreenchido[campo] = util.formatarTelefone(input.value);
				}
			}
		})
	})

	return convidadoPreenchido;
}

export async function submeterFormulario(inputs){
	const formularioValido = validarFormulario(inputs); // isso é um booelan
	
	//se tirver tudo OK...
	if(formularioValido){
		let convidadoPreenchido = preencherObjetoConvidado(inputs); //cria obj com dados do formulario

		//última checagem para verificar se o convidado já está cadastrado
		let testeConvidado = await service.buscarConvidado("nome",convidadoPreenchido.nome); //buscando o convidado recém criado para pegar o id
		if(testeConvidado.length > 0){
			window.location.href = `confirmacao_encerramento.html?id=${testeConvidado[0]._id}`;
		}
		else{//se realmente ele não existe...
			await service.cadastrarConvidado(convidadoPreenchido); //insere os dados no banco
			convidadoPreenchido = await service.buscarConvidado("nome",convidadoPreenchido.nome); //buscando o convidado recém criado para pegar o id
			window.location.href = `confirmacao_encerramento.html?id=${convidadoPreenchido[0]._id}`;
		}
	}
	else{
		dispararAlerta('Favor preencher todos os campos!');
	}
}