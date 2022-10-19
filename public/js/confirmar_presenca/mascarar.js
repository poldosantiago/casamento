function mascarar(input){
	if(input.dataset.tipo = 'telefone'){
		let telefone = input.value;
		input.value = formatarTelefone(telefone);
	}
}

function formatarTelefone(telefone){
	return telefone
		.replace(/[\D]/g,'')
		.replace(/([0-9]{2})([9])?([0-9]{4})?([0-9]{4})?/,"($1)$2$3-$4")
		.replace(/(9)(-)/,'$1')
		.replace(/[-\s]+$/,'');
}

// let telefone = '119'
// console.log(formatarTelefone(telefone));


export default mascarar;