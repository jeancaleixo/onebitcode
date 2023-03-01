let nomeDoTurista = prompt ("Qual é o seu nome?")
let visitou = prompt ("Você já visitou alguma cidade?")
let cidades = ""
let contagem = 0


while (visitou === "sim") {
  nomeDaCidade = prompt ("Qual é o nome da cidade?")
  cidades += " - " + nomeDaCidade + "\n"
  contagem++
  visitou = prompt ("Você visitou alguma outra cidade?")
}

alert (
  "Turista: " + nomeDoTurista +
  "\nQuantidade de cidades visitadas: " + contagem +
  "\nCidades visitadas:\n" + cidades
)
