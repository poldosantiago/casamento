function validarNome(nome){
	nome = nome.trim(); //remove espaço dos lados
	const regex = new RegExp(/^[a-zA-ZÁÉÍÓÚÃÕÊÇáéíóúãêç]+(([\'\,\.\- ][a-zA-ZÁÉÍÓÚÃÕÊÇáéíóúãêç])?[a-zA-ZÁÉÍÓÚÃÕÊÇáéíóúãêç]*)*$/,'g'); // valida nome próprio
	return regex.test(nome);
}

console.log(validarNome("João Vicente Neto bragança"));


