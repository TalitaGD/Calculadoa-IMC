// DEFINICAO DAS VARIAVEIS:
const resultado = document.getElementById('resultado');
const altura = document.getElementById('altura');
const peso = document.getElementById('peso');
const decimalDiv = document.querySelector('.divAltura');

// CRIANDO CONST PARA REALIZAR OS CALCULOS DE IMC + CONVERSAO DA MASCARA
const calcIMC = () => {

// USANDO O "TOSTRING" E O "REPLACE" PARA TROCAR A "," PELO "." - DESSA FORMA, ASSIM PODEMOS CONVERTER PARA O TIPO FLOAT (DECIMAL):
  let alturaValue = parseFloat(altura.value.toString().replace(",", "."));

  if (alturaValue !== '' && peso.value !== '') {
    const imc = (peso.value / (alturaValue * alturaValue)).toFixed(2)
    let classification = ''

// CASCATE DE IF PARA DEFINIR O IMC:
    if (imc < 17) {
      classification = 'muito baixo do peso';
      resultado.style.background = 'red';

    } else if (imc > 17 && imc <= 18.49) {
      classification = 'abaixo do peso'
      resultado.style.background = 'red';

    } else if (imc > 18.50 && imc <= 24.99) {
      classification = 'peso normal'
      resultado.style.background = 'green';

    } else if (imc > 25 && imc <= 29.99) {
      classification = 'acima do peso'
      resultado.style.background = 'red';

    } else if (imc > 30 && imc <= 34.99) {
      classification = 'obesidade Grau I'
      resultado.style.background = 'red';

    } else if (imc > 35) {
      classification = 'obesidade Grau II'
      resultado.style.background = 'red';
    }

    resultado.innerHTML = `ATENCAO: Seu IMC é de: ${imc} e sua classificacao é: ${classification}`;
  } else {
    resultado.innerHTML = 'Preencha os campos';
    resultado.style.background = 'red';
  }

}

// CRIANDO FUNCTION DO BOTAO "LIMPAR" PARA APAGAR OS CAMPOS
function apagar() {
  peso.value = "";
  altura.value = "";
  resultado.remove()
}

