function somar() {
  /* document.getElementById após a declaração da variável pegando do HTML */
  let primeiroValor = document.getElementById("primeiroValor").value;

  let segundoValor = document.getElementById("segundoValor").value;

  const resultado =
    parseFloat(primeiroValor) +
    parseFloat(segundoValor); /*parseFloat converte o valor de texto para float

    /* devolvendo para o HTML */
  document.getElementById("resultado").value = resultado;
}

function subtrair() {
  let primeiroValor = document.getElementById("primeiroValor").value;

  let segundoValor = document.getElementById("segundoValor").value;

  const resultado =
    parseFloat(primeiroValor) -
    parseFloat(
      segundoValor
    ); /*parseFloat converte o valor de texto para float*/

  document.getElementById("resultado").value = resultado;
}

function dividir() {
  let primeiroValor = document.getElementById("primeiroValor").value;

  let segundoValor = document.getElementById("segundoValor").value;

  if (segundoValor == "0") {
    alert("Não existe divisão por zero.");
  }

  const resultado = parseFloat(primeiroValor) / parseFloat(segundoValor);

  document.getElementById("resultado").value = resultado;
}

function multiplicar() {
  let primeiroValor = document.getElementById("primeiroValor").value;

  let segundoValor = document.getElementById("segundoValor").value;

  const resultado = parseFloat(primeiroValor) * parseFloat(segundoValor);

  document.getElementById("resultado").value = resultado;
}
