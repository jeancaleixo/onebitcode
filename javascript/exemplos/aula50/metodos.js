let pessoa = {
  nome: "jean",
  idade: 18,
  dizerOla(){
    console.log("olá mundo! meu nome é " + this.nome)
  }
}

console.log(pessoa)
pessoa.dizerOla()