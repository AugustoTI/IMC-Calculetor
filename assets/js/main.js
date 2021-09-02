// Função Principal que vai ser executada
function IMC() {
  const formulario = document.querySelector("form");
  formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    const inputPeso = event.target.querySelector("#peso");
    const inputAltura = event.target.querySelector("#altura");
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
      addReposta(`Peso invalido`, false);
      return;
    }

    if (!altura) {
      addReposta(`Altura invalida`, false);
      return;
    }

    const imc = calcularIMC(peso, altura);
    const nivel = nivelIMC(imc);
    const msg = `Seu IMC é: ${imc} (${nivel})`;

    addReposta(msg, true);
  });
}

// Função para Criar meu Paragrafo
function criarParagrafo() {
  const p = document.createElement("p");
  return p;
}

// Função para captura e criação da resposta
function addReposta(msg, isValid) {
  const resultado = document.querySelector("#IMC");
  const p = criarParagrafo();
  resultado.innerHTML = ``;

  if (isValid) {
    p.classList.add("good");
  } else {
    p.classList.add("Bad");
  }

  p.innerHTML = `${msg}`;
  resultado.appendChild(p);
}

// Função para calcular meu IMC
function calcularIMC(peso, altura) {
  const conta = peso / (altura * altura);
  return conta.toFixed(2);
}

// Função para medir o nivel do meu IMC
function nivelIMC(IMC) {
  const niveis = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];

  if (IMC >= 40) return niveis[5];
  if (IMC >= 35 && IMC <= 39.9) return niveis[4];
  if (IMC >= 30 && IMC <= 34.9) return niveis[3];
  if (IMC >= 25 && IMC <= 29.9) return niveis[2];
  if (IMC >= 18.5 && IMC <= 24.9) return niveis[1];
  if (IMC < 18.5) return niveis[0];
}

IMC();
