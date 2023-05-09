//criação da classe

class Conta{
    constructor(numero,saldo,ativa){
        this.numero=numero;
        this.saldo=saldo;
        this.ativa=ativa
    }


    Credito(valor){
        this.saldo=this.saldo + valor
    }

    Debito(valor){

        if (valor<0) {
                console.log("Impossivel fazer, número negativo ...")
        }
        else if(this.saldo<valor){
            console.log("Impossivel realizar, saldo indisponivel...")
        }
        else{
            this.saldo = this.saldo - valor
        }
    }

}

// programa principal 

let c1 = new Conta(15, 0 , true)

console.log("Saldo atual é de : "+c1.saldo)
c1.Credito(100)
console.log("Saldo atual é de : "+c1.saldo)
c1.Debito(50)
console.log("Saldo atual é de : "+c1.saldo)
c1.Debito(60)
console.log("Saldo atual é de : "+c1.saldo)