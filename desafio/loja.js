const leia = require("prompt-sync")()

let codigos = ["P01", "P02","P03", "P04"]
let Produtos = ["Camisa","Calça","Saia","Short"]
let Preco = [0,0,0,0]


console.log("COD\tPRODUTO\tPREÇOS")

for(let i=0; i<codigos.length; i++){
    console.log(codigos[i] + '\t' +Produtos[i]+'\t' +Preco[i])
}



for(let x=0; x < Preco.length; x++){
    Preco[x] = parseInt(leia("Digite quanto custa a "+Produtos[x]+":"))

}


for(let i=0; i<codigos.length; i++){
    console.log(codigos[i] + '\t' +Produtos[i]+'\t' +Preco[i])
}


console.log("Alteração de dados")
let codigo = leia("Digite o codigo do produto que deseja trocar no nome : ")

for(let i=0; i<codigos.length; i++){
    if(codigo == codigos [i]){
        console.log("Nome atual do produto " +Produtos[i])
        Produtos[i] = leia("Digite o novo nome : ")
    }
}

console.log("COD\tPRODUTO\tPREÇOS")
for(let i=0; i<codigos.length; i++){
    console.log(codigos[i] + '\t' +Produtos[i]+'\t' +Preco[i])
}
