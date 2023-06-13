const leia = require("prompt-sync")();

// variaveis
let numero = 0
let contador = -1
let total = 0
let maiorNum = 0

do{
    total =total + numero
    if(numero > maiorNum){
        maiorNum = numero
    }
    contador++
    numero = parseInt(leia("Digite um numero : "))
    
}while(numero>0)
console.log("Total é : "+total)
console.log("Maior numero : " +maiorNum)
console.log("Quantidade de numero é :" +contador)




