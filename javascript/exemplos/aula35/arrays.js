const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)

//adicionar elementos
//push
arr.push("Boromir")
console.log(arr)

//unshift
arr.unshift("Boromir")
console.log(arr)

//remover elementos
//pop
let ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

//shift
ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)


//pesquisar elementos
//includes

const inclui = arr.includes("Gandalf")
console.log(inclui)

//indexOf
const indice = arr.indexOf("Gandalf")
console.log(indice)

//cortar e concatenar
//slice

const hobbits = arr.slice(0, 4)
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(outros)

//concat

const sociedade = hobbits.concat (outros, "Boromir")
console.log(sociedade)

//substituição de elementos
//splice
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o cinzento")
console.log(sociedade)
console.log(elementosRemovidos)

