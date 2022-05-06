/* login();
function login(){ */
const botaoLogin = document.querySelector('#btn-login');
const email = document.getElementById('email');
const senha = document.getElementById('password');

function validar() {
  const campoEmail = /* "tryber@teste.com" */ email;
  const campoSenha = /* "123456" */ senha;
  console.log('teste');
  if (campoEmail === 'tryber@teste.com' && campoSenha === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}

botaoLogin.addEventListener('click', validar());
/* } */
