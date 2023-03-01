let opcao = "5"


do {
opcao = prompt (
  "escolha uma das opções abaixo:" +
  "\n1. Opção um" +
  "\n2. Opção dois" +
  "\n3. Opção três" +
  "\n4. Opção quatro" +
  "\n5. Encerrar"
)

switch (opcao){
  case "1":
    alert ("A opção um foi selecionada")
    break
  case "2":
    alert ("A opção dois foi selecionada")
    break
  case "3":
    alert ("A opção três foi selecionada")
    break
  case "4":
    alert ("A opção quatro foi selecionada")
    break
  case "5":
    alert ("A operação foi encerrada")
    break
}

} while (opcao !== "5")

