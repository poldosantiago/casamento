//busca o convidado por qualquer valor do objeto - chamo de parametro
async function buscarConvidado(parametro,valor){
	return fetch(`https://casamento-backend.herokuapp.com/convidados?${parametro}=${valor}`)
	.then(response => {		
			return response.json();
	})
	throw new Error('Não foi possível encontrar o convidado');
}

async function atualizarConvidado(id, objConvidado){
	return fetch(`https://casamento-backend.herokuapp.com/convidados/${id}`,{
		method: 'PUT',
		headers: {
			'Content-Type' : 'application/json'
		},
		body: JSON.stringify(objConvidado)
	})
	.then(resposta =>  {
		if(resposta.ok){
			return resposta.json();
		}
		throw new Error('Não foi possível atualizar o cliente');
	})
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
	atualizarConvidado,
	buscarConvidado,
	cadastrarConvidado,
	listarConvidados
}

export default service;

//caminho local
// http://localhost:5000/coonvidados