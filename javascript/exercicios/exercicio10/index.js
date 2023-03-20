const vagas = []

function listarVagas() {
  const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice){
    textoFinal += indice + ". "
    textoFinal += vaga.nome
    textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
    return textoFinal
  }, "")

  alert(vagasEmTexto)
}

function novaVaga() {
  const nome = prompt("Informe um nome para vaga:")
  const descricao = prompt("Informe uma descrição para a vaga:")
  const dataLimite = prompt("Informe uma data limite (dd/mm/aaaa) para a nova vaga:")

  const confirmacao = confirm(
    "Deseja cria uma nova vaga com essas informações?\n" +
    "Nome: " + nome + "\nDescrição: " + descricao + "\nData limite: " + dataLimite
  )

  if (confirmacao) {
    const novaVaga = {nome, descricao, dataLimite, candidatos: []}
    vagas.push(novaVaga)
    alert("Nova vaga criada!")
  }
}

function exibirVaga(){
  const indice = prompt("Informe o índice da vaga que deseja exibir:")
  const vaga = vagas[indice]

  const candidatosEmTexto = vagas.candidatos.reduce(function (textoFinal, candidato){
    return textoFinal + "\n - " + candidato
  }, "")

  alert(
    "Vaga n° " + indice +
    "\nNome: " + vaga.nome +
    "\nDescrição: " + vaga.descricao +
    "\nData limite: " + vaga.dataLimite + 
    "\nQuantidade de candidatos: " + vaga.candidatos.length + 
    "\nCandidatos inscritos: " + candidatosEmTexto
  )
}

function inscreverCandidato(){
  const candidato = prompt("Informe o nome do candidato:")
  const indice = prompt("Informe o índice da vaga em que o candidato deseja se inscrever:")
  const vaga = vagas[indice]

  const confirmacao = confirm(
    "Deseja inscrever o candidato" + candidato + " na vaga " + indice + "?\n" +
    "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
  )

  if (confirmacao) {
    vaga.candidato.push(candidato)
    alert("Inscriçção realizada!")
  }
}

  function excluirVaga(){
    const indice = prompt("Informe o índice da vaga que deseja excluir:")
    const vaga = vagas[indice]

    const confirmacao = confirm(
      "Tem certeza que deseja excluir a vaga " + indice + "?\n" +
      "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
    )

    if (confirmacao){
      vagas.splice(indice, 1)
      alert("Vaga excluída!")
    }
  }


function exibirMenu(){
  const opcao = prompt(
    "Cadastro de vagas de emprego" +
    "\n\nEscolha uma das opções abaixo:" +
    "\n1. Listar vagas disponíveis" +
    "\n2. Criar uma nova vaga" +
    "\n3. Visualizar uma vaga" +
    "\n4. Inscrever um candidato" +
    "\n5. Excluir uma vaga" +
    "\n6. Sair"
  )

  return opcao
}

function executar (){
  let opcao = ""

  do {
    opcao = exibirMenu()

    switch(opcao){
      case "1":
        listarVagas()
        break
      case "2":
        novaVaga()
        break
      case "3":
        exibirVaga()
        break
      case "4":
        inscreverCandidato()
        break
      case "5":
        excluirVaga()
        break
      case "6":
        alert("Saindo...")
        break
      default:
        alert("Opção inválida")
    }
  } while ( opcao !== "6")
}

executar()