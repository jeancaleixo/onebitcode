function triangulo(){
  const a = prompt("base:")
  const b = prompt("altura:")
  return a * b / 2
}

function retangulo (){
  const a = prompt("base:")
  const b = prompt("altura:")
  return a * b
}

function quadrado(){
  const a = prompt("lado:")
  return a * a
}

function trapezio (){
  const bmaior = prompt("base maior:")
  const bmenor = prompt("base menor")
  const a = prompt("altura:")
  return bmaior + bmenor * a  / 2
}

function circulo (){
  const r = prompt("raio:")
  return (3.14 * r * r)
}

function menu(){
  return prompt(
  "Bem vindo a Calculadora geométrica, escolha uma das opções de cálculo abaixo: " +
  "\n1. Área do triângulo" +
  "\n2. Área do retângulo" +
  "\n3. Área do quadrado" +
  "\n4. Área do trapézio" +
  "\n5. Área do círculo" +
  "\n6. Sair"
  )
}

function executar(){

let opcao = ""

do {

opcao = menu()
let resultado

switch(opcao) {
  case "1":
    resultado = triangulo()
    break
  case "2":
    resultado = retangulo()  
    break
  case "3":
    resultado = quadrado()
    break
  case "4":
    resultado = trapezio()
    break
  case "5":
    resultado = circulo()
    break
  case "6":
      alert("Encerrando...")
  default:
      ("Entrada inválida")
}

if (resultado){
  alert("Resultado: " + resultado)
}

}while(opcao !== "6")
}

executar()