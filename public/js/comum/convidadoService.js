async function buscarConvidadoPorId(id){
	return fetch(`https://casamento-backend.herokuapp.com/convidados/${id}`)
	.then(response => {		
			return response.json();
	})
	throw new Error('Não foi possível encontrar o convidado');
}

//busca o convidado por qualquer valor do objeto - chamo de parametro
async function buscarConvidado(parametro,valor){
	return fetch(`https://casamento-backend.herokuapp.com/convidados/busca?${parametro}=${valor}`)
	.then(response => {		
			return response.json();
	})
	throw new Error('Não foi possível encontrar o convidado');
}

//listar TODOS os condidados
async function listarConvidados(){
	return fetch(`https://casamento-backend.herokuapp.com/convidados`)
	.then(response => {		
			return response.json();
	})
	throw new Error('Não foi possível listar os convidados');
}

function cadastrarConvidado(convidado){
	return fetch('https://casamento-backend.herokuapp.com/convidados',{
		method: 'POST',
		headers: {
			'Content-Type' : 'application/json'
		},
		body: JSON.stringify(convidado)
	})
	.then(resposta =>  {
		if(resposta.ok){
			return resposta.body;
		}
		throw new Error('Não foi possível detalhar o cliente');
	})
}

const service = {
	buscarConvidado,
	buscarConvidadoPorId,
	cadastrarConvidado,
	listarConvidados
}

export default service;

//caminho local
// http://localhost:5000/coonvidados