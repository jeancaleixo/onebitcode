//map

const nomes = personagens.map(function (personagem){
  return personagem.nome
})

console.log(nomes)

//filter

const orcs = personagens.filter(function (personagem){
  return personagem.raca === "Orc"
})

console.log(orcs)

//reduce

const nivelTotal = personagens.reduce(function (valorAcumulado, personagem){
  return valorAcumulado + personagem.nivel
}, 0)

console.log(nivelTotal)

const racas = personagens.reduce(function (valorAcumulado, personagem){
  if (valorAcumulado[personagem.raca]){
    valorAcumulado[personagem.raca].push(personagem)
  } else {
    valorAcumulado[personagem.raca] = [personagem]
  }
  return valorAcumulado
}, {})

console.log(racas)

//sort

personagens.sort(function(a. b){
  return b.nivel - a.nivel
})

console.log(personagens)