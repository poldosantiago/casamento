function pegarParametroPagina(parametro){
	const url_string = window.location.href;
	const url = new URL(url_string);
	return url.searchParams.get(parametro);
}

function formatarNome(nome){
	return nome.toLowerCase().replace(/(?:^|\s)(?!da|de|do)\S/g, l => l.toUpperCase())
}

function pegarPrimeiroNomeFormatado(nome){
	return formatarNome(nome).split(' ')[0];
}

function validarNome(nome){
	nome = nome.trim(); //remove espaço dos lados
	const regex = new RegExp(/^[a-zA-ZÁÉÍÓÚÃÕÊËÇáéíóúãêëç]+(([\'\,\.\- ][a-zA-ZÁÉÍÓÚÃÕÊËÇáéíóúãêëç])?[a-zA-ZÁÉÍÓÚÃÕÊËÇáéíóúãêëç]*)*$/,'g'); // valida nome próprio
	return regex.test(nome);
}

function formatarTelefone(telefone){
	return telefone
	.replace(/[\(\)-]/g,'') //remove todos os caracteres
	.replace(/(\d{2})(\d{4,5})(\d{4})/,'($1)$2-$3'); //depois formata
}

const util = {
	pegarParametroPagina,
	formatarNome,
	pegarPrimeiroNomeFormatado,
	validarNome,
	formatarTelefone
}

export default util;

