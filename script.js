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
const botaoEnviar = document.getElementById('submit-btn');

botaoEnviar.disabled = true;
function enviar() {
  if (termosDeUso.checked === true) {
    botaoEnviar.disabled = true;
  } else {
    botaoEnviar.disabled = false;
  }
}
termosDeUso.addEventListener('mouseup', enviar);

const areaDeTexto = document.getElementById('textarea');
const resultadoCaracteres = document.getElementById('counter');
const maxCaracteres = areaDeTexto.maxLength;
function contador() {
  const texto = areaDeTexto.value;
  const totalCaracteres = texto.length;
  const caracteresRestantes = maxCaracteres - totalCaracteres;
  const total = 'Caracteres Restantes: ';
  resultadoCaracteres.innerText = total + caracteresRestantes;
}
areaDeTexto.addEventListener('keyup', contador);

const nome = document.getElementById('input-name');
const sobrenome = document.getElementById('input-lastname');

const nomeForms = nome.innerText;
console.log(nomeForms);
console.log(nome);
const sobrenomeForms = sobrenome.value;

function adicionandoForms() {
  console.log(nomeForms);
 // alert(nomeForms);
}

botaoEnviar.addEventListener('mouseover', adicionandoForms);
