const nomeDoPersonagem = prompt ("insira o nome do personagem")
const poderDeHabilidade = prompt ("insira o poder de habilidade")

const nomeDoInimigo = prompt ("insira o nome do inimigo")
let vidaDoInimigo = prompt("insira os pontos de vida do inimigo")
const defesaDoInimigo = prompt ("insira os pontos de defesa do inimigo")
const escudo = prompt ("ele possui escudo? (sim/não)")

let danoCausado = 0

if (poderDeHabilidade > defesaDoInimigo && escudo === "não") {
  danoCausado = poderDeHabilidade - defesaDoInimigo  
} else if (poderDeHabilidade > defesaDoInimigo && escudo === "sim") {
  danoCausado = (poderDeHabilidade - defesaDoInimigo) / 2
}

vidaDoInimigo -= danoCausado

alert(nomeDoPersonagem + " causou " + danoCausado + " de dano em " + nomeDoInimigo)
alert(
  nomeDoPersonagem + "\nPoder de habilidade: " + poderDeHabilidade + "\n\n" +
  nomeDoInimigo + "\nVida do inimigo: " + vidaDoInimigo +
  "\nDefesa do inimigo: " + defesaDoInimigo + "\nPossui escudo? " + escudo
)