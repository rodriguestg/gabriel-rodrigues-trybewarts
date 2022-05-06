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
