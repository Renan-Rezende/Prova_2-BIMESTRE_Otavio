// QUESTÃO 1

// FUNÇÃO QUE VERIFICA SE É NÚMERO PRIMO
function primo() {
  var numero = prompt("Digite um número para verificar se ele é primo");
  var divisores = 0;

  for (var count = 1; count <= numero; count++) {
    if (numero % count == 0) {
      divisores++;
    }
  }

  if (divisores == 2) {
    alert("O número " + numero + " é primo");
  } else {
    alert("O número " + numero + " não é primo");
  }
}

primo();

// FUNÇÃO QUE LISTA OS NÚMEROS PRIMOS DE 0 a 1000
function listarNumerosPrimos() {
  let primos = [];

  for (let numero = 2; numero <= 1000; numero++) {
    let ehPrimo = true;

    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        ehPrimo = false;
        break;
      }
    }

    if (ehPrimo) {
      primos.push(numero);
    }
  }

  let mensagem = "Números primos de 1 a 1000:\n\n" + primos.join(", ");
  alert(mensagem);
}

listarNumerosPrimos();

// QUESTÃO 2

/* FUNÇÃO QUE VERIFICA SE UMA SENHA TEM:
  - Pelo menos 8 dígitos
  - Pelo menos uma letra maiúscula
  - Pelo menos uma letra minúscula
  - Pelo menos um número
*/

function verificarSenha() {
  var senha = prompt('Digite sua senha:');
  var maiuscula = /[A-Z]/.test(senha);
  var minuscula = /[a-z]/.test(senha);
  var numero = /\d/.test(senha);
  var tamanhoMinimo = senha.length >= 8;

  if (maiuscula && minuscula && numero && tamanhoMinimo) {
    alert('A senha é válida.');
  } else {
    alert('Senha inválida.');
  }
}

verificarSenha();

// QUESTÃO 3

// FUNÇÃO QUE CALCULA OS FATORIAIS DE 1 a 10
function calcularFatorial(numero) {
  let resultado = 1;
  for (let i = 1; i <= numero; i++) {
    resultado *= i;
  }
  return resultado;
}

let mensagem = "";
for (let i = 1; i <= 10; i++) {
  let fatorial = calcularFatorial(i);
  mensagem += `O fatorial de ${i} é ${fatorial}\n`;
}

alert(mensagem);

// QUESTÃO 4

// FUNÇÃO QUE DETERMINA SE É UM QUADRADO PERFEITO
function verificarNumero() {
  var numero = prompt("Digite um número para verificar se ele é um quadrado perfeito.");
  var raizQuadradaNumero = Math.sqrt(numero);

  if (Math.floor(raizQuadradaNumero) === raizQuadradaNumero) {
    alert(numero + " é um quadrado perfeito");
  } else {
    alert(numero + " não é um quadrado perfeito.");
  }
}

verificarNumero();
