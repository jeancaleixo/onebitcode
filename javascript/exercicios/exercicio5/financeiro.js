let dinheiroInicial = prompt ("Informe o saldo inicial")
dinheiroInicial = parseFloat (dinheiroInicial)
let opcao = ""

do {

  opcao = prompt ("Saldo: " + dinheiroInicial + "\nSelecione uma das opções: " + "\n1. Deposito" + "\n2. Saque" + "\n3. Sair")

  switch (opcao) {
    case "1":
    dinheiroInicial += parseFloat(prompt ("Quanto deseja depositar?"))
    break

    case "2":
    dinheiroInicial -= parseFloat(prompt ("Quanto deseja sacar?"))
    break

    case "3":
      alert("A operação foi encerrada")

    default:
      alert("Entrada invalida")
  }

} while (opcao !== "3")


