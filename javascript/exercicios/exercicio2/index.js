const carro1 = prompt ("nome do carro1")
const velocidade1 = prompt ("velocidade do carro1")

const carro2 = prompt ("nome do carro2")
const velocidade2 = prompt ("velocidade do carro2")

if (velocidade1 > velocidade2) {
  alert(carro1 + " é mais rapido que o "+ carro2)
} else if (velocidade2 > velocidade1) {
  alert(carro2 + " é mais rapido que o "+ carro1)
} else {
  alert(carro1 + " e " + carro2 + " são iguais")
}

