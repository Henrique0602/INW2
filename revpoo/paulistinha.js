const leia = require("prompt-sync")()


// arrays ou vetores

let equipes = ['Santos', 'SPFC', 'SCCP', 'SEP']
let pontos = [0,0,0,0]

for( let x = 0; x<equipes.length; x++){
    console.log(equipes[x])
    pontos[x] = parseInt(leia("Digite quantos pontos esse time tem :  "))
}

console.log("Tabela")
console.log("Time\t Pontos")
for(let x=0; x<=equipes.length; x++){
    console.log(equipes[x] +'\t' +pontos[x])
}





