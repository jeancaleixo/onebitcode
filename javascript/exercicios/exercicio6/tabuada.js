const numero = prompt ("Informe o número que você deseja saber a tabuada:")
let resultado = ""

for (let fator = 1; fator <= 10; fator++) {
  resultado += " -> " + numero + " * " + fator + "=" + (numero * fator) + "\n"
}

alert ("Resultado da tabuada de " + numero + ":\n\n" + resultado)