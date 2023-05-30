
class Joias{
    constructor(id,descricao,ativo,estoque,preco,material,peso){
        
        this.id=id;
        this.descricao=descricao;
        this.ativo=ativo;
        this.estoque=estoque;
        this.preco=preco;
        this.material=material;
        this.peso=peso;
    }

    ativar(){
        this.ativo=true
    }

    incluirEstoque(valor){
        if(this.ativo){
            if(valor<0){
                console.log("Impossivel realizar, estoque insulficiente")
            }
            else if(valor==0){
                console.log("Impossivel realizar, estoque zerado...")
            }
            else if(valor > 10){
                console.log("Impossivel realizar")
            }
            
            else {
                this.estoque += valor
            }
        }
        else{
            console.log("Sem estoque")
        }
    }

    RetirarEstoque(valor){
        if (this.ativo){
            if(valor<0){
                console.log("Impossivel realizar, no momento não tem no estoque...")
               }
               else if(valor ==0){
                console.log("Impossivel realizar, estoque zerado...")
               }

               else if( valor>=this.estoque){
                console.log("Impossivel realizar, estoque indisponivel..")
               }
               else {
                this.estoque -=valor
               }
        }
       
        else {
            console.log("Estoque inativa.....")
        }
       
    }
}

// Programa principal

const leia = require('prompt-sync')()
let id= parseInt(leia("Digite o id da joia que você quer : "));
let descricao= (leia("Digite a descrição da joia que você quer : "))
let preco= parseInt(leia("Digite o preço da joia que você quer : "))
let material= parseInt(leia("Digite o material da joia que você quer : "))

let Joia1 = new Joias(id, descricao, false, 10, preco, material)
Joia1.ativar();
for (let i = 0; i < 5; i++) {
    console.log("Movimento "+i)
    valor= parseInt(leia("Digite quantas joias você quer comprar : "));
    Joia1.RetirarEstoque(valor);
    console.log("Quantidade no estoque : " + Joia1.estoque)            
}

    valor= parseInt(leia("Digite quantas joias você quer colocar no estoque : "));
    Joia1.incluirEstoque(valor);
    console.log("Incluimos  no estoque : " + Joia1.estoque)             





