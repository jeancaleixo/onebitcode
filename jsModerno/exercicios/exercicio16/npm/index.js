const dayjs = require("dayjs")

function birthday (born){
 const birthday = dayjs(born)
 const today = dayjs()

 const age = today.diff(birthday, 'year')
 const nextBirthday = birthday.add(age + 1, 'year')
 const daysToNextBirthday = nextBirthday.diff(today, 'days')

 console.log(`idade: ${age}`)
 console.log(`próximo aniversário: ${nextBirthday.format('DD/MM/YYYY')}`)
 console.log(`dias para o próximo aniversário: ${daysToNextBirthday}`)

}

birthday("2004-10-14")