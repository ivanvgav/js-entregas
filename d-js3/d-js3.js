// Loops o ciclos
// Favor de descomentar las partes del código para probar cada uno de los algoritmos

// Algoritmo para encontrar el sucesor de un número 0 a 10
/*
let number = Number(prompt("Ingrese un número del 0 al 10. Se le sumará el sucesor hasta llegar a 10."))

for(let i = 1; i <= 10 ; i++) {
  let resultado = number + i
  alert(`El sucesor es: ${resultado}`)
}
*/

//Algoritmo para escribir una concatenación de strings
/*
let entrada = prompt("Ingrese un caracteres o ESC para salir")
let texto = " "

while (entrada != "ESC" && entrada != "esc") {
  texto += entrada + " "
  entrada = prompt("Ingrese un texto o ESC para interrumpir")
}

alert(texto)
*/

// Algoritmo de Hola
// Repite la palabra hola tantas veces diga el numero ingresado
/*
let number = Number(prompt("Ingrese un número."))
let hola = "Hola"
let vacio = ""

for (let i = 0; i < number; i++) {
  vacio += hola
  vacio += " "
}

alert(vacio)
*/