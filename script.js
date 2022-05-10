const botaoLogin = document.querySelector('#btn-login');
const email = document.getElementById('email');
const senha = document.getElementById('password');

function validar() {
  const emailTexto = email.value;
  const senhaTexto = senha.value;
  if (emailTexto === 'tryber@teste.com' && senhaTexto === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}
botaoLogin.addEventListener('click', validar);

const termosDeUso = document.getElementById('agreement');
const divEnviar = document.getElementById('botao-enviar');
const botaoEnviar = document.getElementById('submit-btn');

function enviar() {
  if (termosDeUso.checked === true) {
    botaoEnviar.disabled = false;
  } else {
    botaoEnviar.disabled = true;
  }
}
// botaoEnviar.addEventListener('change', desabilitarBotão);
divEnviar.addEventListener('mouseover', enviar);
// botaoEnviar.addEventListener('click', termosDeUso);
