let metros = prompt ("Informe um valor em metros: ")
let conversao = prompt ("informe a medida de conversão: (mm/cm/dm/dam/hm/km)")

switch (conversao) {
  case "mm":
    alert(metros * 1000 + " mm")
    break
  
  case "cm":
    alert(metros * 100 + " cm")
    break

  case "dm":
    alert(metros * 10 + " dm")
    break

  case "dam":
    alert(metros / 10 + " dam")
    break

  case "hm":
    alert(metros / 100 + " hm")
    break

  case "km":
    alert(metros / 1000 + " km")
    break
    
  default:
    alert("A medida informada está indisponível")
}