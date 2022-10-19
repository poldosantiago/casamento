import confirmarPresenca from './confirmarPresenca.js';

//botão confirmação da página index
const btnConfirmarPresenca = document.querySelector('[data-btn-confirmar-presenca]');
btnConfirmarPresenca.addEventListener('click', evento => confirmarPresenca(evento.target));
