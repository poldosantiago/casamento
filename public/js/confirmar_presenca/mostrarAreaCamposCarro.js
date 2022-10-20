import {validarCampoFormulario} from './validar.js';

function mostrarAreaCamposCarro(input){
	// console.log(input.checked);
	const decisao = input.value;
	const camposOcultos = document.querySelectorAll('[data-campo_oculto]');

	if(decisao === "SIM"){	
		camposOcultos.forEach(campo => {
			//mostro o campo oculto
			campo.classList.remove('--oculto');

			//insiro o data atribute + comportamento de input
			const inputOculto = campo.firstElementChild;
			inputOculto.setAttribute('data-tipo',`${campo.dataset.campo_oculto}`);
			inputOculto.addEventListener('blur', evento => validarCampoFormulario(evento.target))
			
		});
	}
	else{
		camposOcultos.forEach(campo => {
			//oculto o campo oculto
			campo.classList.add('--oculto')

			//removo o data atribute + comportamento de input
			const inputOculto = campo.firstElementChild;
			inputOculto.removeAttribute('data-tipo');
			inputOculto.removeEventListener('blur', evento => validarCampoFormulario(evento.target))
		});
	}
}

export default mostrarAreaCamposCarro;