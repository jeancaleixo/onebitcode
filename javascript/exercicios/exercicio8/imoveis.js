const imoveis = []
let opcao = ""

do {

opcao = prompt (
  "Bem vindo\n" +
  "Quantidade de imóveis cadastrados: " + imoveis.length + "\n" +
  "Escolha: " + "\n" +
  "1. Cadastrar novo imóvel\n" +
  "2. Listar imóveis\n" +
  "3. Sair"

)

switch (opcao) {
  case "1":
    const imovel = {}
    imovel.proprietario = prompt("Nome do proprietário\n")
    imovel.quartos = prompt("Quantidade de quartos\n")
    imovel.banheiros = prompt("Quantidade de banheiros\n")
    imovel.garagem = prompt("Possui garagem?\n")
    imoveis.push(imovel)
    break
    case "2":
      for (let i = 0; i < imoveis.length; i++){ 
     alert(
      "imóvel " + (i + 1) +
      "\nProprietário: " + imoveis[i].proprietario +
      "\nQuantidade de quartos: " + imoveis[i].quartos +
      "\nQuantidade de banheiros: " + imoveis[i].banheiros +
      "\nPossui garagem: " + imoveis[i].garagem
     )}
       break
     case "3":
       alert("Encerrando...")
     default:
       ("Entrada inválida")
   } 


}while(opcao !== "3")

