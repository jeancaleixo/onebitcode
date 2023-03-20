function calcular(a, b, operacao){
  console.log("realizando uma operação")
  const resultado = operacao(a, b)
  return resultado
}

function somar(x, y){
  console.log("realizando soma")
  return x + y
}

console.log(calcular(3, 5, somar))

console.log(calcular(8, 4, function (x, y){
  console.log("realizando uma subtração")
  return x - y
}))
 

function exbirElemento (elemento, indice, array){
  console.log({
    elemento,
    indice,
    array
  })
}

const lista = ["Maçã", "Banana", "Laranja", "Limão"]

for (let i = 0; i < lista.length; i++){
  exbirElemento(lista[i], i, lista)
}

lista.forEach(exbirElemento)