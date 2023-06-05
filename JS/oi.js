// const  nome = "Pedro"
// let valor1= 10
// let valor2 = 20
// let total = valor1+valor2



// console.log("Oi meu amigo(a) "+nome.toLocaleLowerCase())

// console.log("A soma dos dois valores é : " +total)


const leia = require("prompt-sync")();
let numero1,numero2 = 0;



numero1 = parseInt(leia("Digite primeiro numero : " ))
numero2 = parseInt(leia("Digite segundo  numero : " ))

console.log("A soma de " +numero1+ " mais " +numero2+ " é " +(numero1+numero2));
