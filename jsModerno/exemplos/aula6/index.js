const person = {
  name: "luke",
  job: "farmer",
  parents: ["anakin", "padme"]
}

const name = person.name

const { job, parents} = person

console.log(name, job, parents)

const [father, mother] = parents

console.log(father, mother)