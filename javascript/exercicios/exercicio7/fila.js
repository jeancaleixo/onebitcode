let fila = []
let opcao = ""

do {
  let pacientes =  ""
  for (let i = 0; i < fila.length; i++){
    pacientes += (i + 1) + "° - " + fila[i] + "\n" 
} 

opcao = prompt (
  "Pacientes:\n" + pacientes + 
  "\nEscolha:\n1. Novo Paciente\n2. Consultar paciente\n3. Sair"
)

switch (opcao) {
  case "1":
    const novoPaciente = prompt(" Qual é o nome do novo paciente? ")
    fila.push(novoPaciente)
    break
  case "2":
   const pacienteRetirado = fila.shift()
   alert(pacienteRetirado + " Foi consultado.")
    break
  case "3":
    alert("Encerrando...")
  default:
    ("Entrada inválida")
} 

}while(opcao !== "3")

