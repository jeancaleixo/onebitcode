let pilha = []
let opcao = ""

do {
  let cartas =  ""
  for (let i = 0; i < pilha.length; i++){
    cartas += pilha[i] + "\n" 
} 

opcao = prompt (
  "Cartas:\n" + cartas + 
  "\nEscolha:\n1. Nova Carta\n2. Puxar Carta\n3. Sair"
)

switch (opcao) {
  case "1":
    const novaCarta = prompt(" Qual é o nome da nova carta? ")
    pilha.push(novaCarta)
    break
  case "2":
   const cartaRetirada = pilha.shift()
   alert(cartaRetirada + " Foi puxada.")
    break
  case "3":
    alert("Encerrando...")
  default:
    ("Entrada inválida")
} 

}while(opcao !== "3")