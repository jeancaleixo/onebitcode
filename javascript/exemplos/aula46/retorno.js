function criarProduto(nome, preco) {
  const produto = {
    nome, // igual a nome: nome
    preco, // igual a preco: preco
    estoque: 1
  }
  return produto
}

console.log(criarProduto("notebook intel", "2500"))

function areaRetangular(base, altura){
  return base * altura
}

function areaQuadrada (lado){
  return areaRetangular(lado, lado)
}

console.log(areaRetangular(3, 5))

console.log(areaQuadrada(9))
