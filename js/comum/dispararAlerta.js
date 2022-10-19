function dispararAlerta(msg){
	const areaAlerta = document.querySelector('[data-alerta]');
	const novaMsg = criarTemplateAlerta(msg);
	areaAlerta.insertAdjacentHTML('afterbegin',novaMsg);
	//areaAlerta.firstChild.classList.add('--sumindo');
	//setTimeout(()=> areaAlerta.firstChild.remove(), 3000);// mensagem de erro some depois de 3 segundos
	setTimeout(()=> areaAlerta.firstChild.classList.add('--sumindo'), 2000);// mensagem de erro some depois de 3 segundos devagarinho
}

function criarTemplateAlerta(msg){
	return `<div class="alerta__alerta">
			<span class="alerta__btn-fechar" onclick="this.parentElement.style.display='none';">&times;</span> 
			<strong>Erro!</strong> ${msg}
			</div>`;
}

export default dispararAlerta;