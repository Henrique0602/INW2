const leia = require("prompt-sync")()

let opcao;
let opcaoVetor;

let cod=["C1","C2","C3"]
let descricao=["Camiseta", "Saia", "calça"]
let valor=[100.00,55.00,150.00]
let estoque = [0,0,0]

//Primeiro Passo
while(opcao != "2"){
    opcaoVetor=""
    console.log("Loja XXX");
    console.log(" 1- Opções\n 2- Sair : ")
    opcao = leia("Digite o numero da opção desejada")
    if(opcao=="1"){
        while(opcaoVetor!="4"){
        console.log("Menu de opções")
        console.log("1 - Mostrar dados")
        console.log("2 - alterar dados")
        console.log("3 - excluir dados")
        console.log("4 - sair")
        opcaoVetor=leia("Digite a opção desejada : ");
        if(opcaoVetor=="1"){
            console.log("COD\tDESCRIÇÃO\tVALOR\tESTOQUE")
            for (let x = 0; x < cod.length; x++) {
                console.log(cod[x]+"\t"+descricao[x]+"\t"+valor[x]+"\t"+estoque[x])
                
            }
        }
        }
        
    }
}

console.log("\n Obrigado por utilizar nossos serviços")

