const leia = require("prompt-sync")()

class pessoa {
    constructor(cpf,nome,anoNascimento){
        this.cpf = cpf
        this.nome=nome
        this.anoNascimento= anoNascimento
     }

     mostrarIdade(){
        console.log(2023-this.anoNascimento)
     }
}


class Aluno extends pessoa{
    constructor(cpf,nome,anoNascimento,matricula,nota){
        super(cpf,nome,anoNascimento)
        this.matricula=matricula
        this.nota=nota        
    }
}

//Programa Principal

let p1= new Aluno("111.222.333-44","Marcos",2008,"MAT01",0)
let p2= new Aluno("222.111.333-44","Maria",2007,"LP01",10)
let p3= new Aluno("333.444.555-66", "Pedro",2007,"GEO01", 6)
let p4= new Aluno("333.444.666-77", "Paulo",2006, "MAt02",7)


console.log("Mat\tALuno\tNota")
console.log("------------------------")
console.log(p1.matricula+'\t'+p1.nome+'\t'+p1.nota)
console.log(p2.matricula+'\t'+p2.nome+'\t'+p2.nota)
console.log(p3.matricula+'\t'+p3.nome+'\t'+p3.nota)
console.log(p4.matricula+'\t'+p4.nome+'\t'+p4.nota)
console.log("------------------------")

console.log("Digitação das notas")
p1.nota=parseInt(leia("Digite a nota do aluno 1 :"))
console.log(p1.nome)
p2.nota=parseInt(leia("Digite a nota do aluno 2 :"))
console.log(p2.nome)
p3.nota=parseInt(leia("Digite a nota do aluno 3 :"))
console.log(p3.nome)
p4.nota=parseInt(leia("Digite a nota do aluno 4 :"))
console.log(p4.nome)
console.log("------------------------")

console.log("Mat\tALuno\tNota")
console.log("------------------------")
console.log(p1.matricula+'\t'+p1.nome+'\t'+p1.nota)

console.log(p2.matricula+'\t'+p2.nome+'\t'+p2.nota)

console.log(p3.matricula+'\t'+p3.nome+'\t'+p3.nota)

console.log(p4.matricula+'\t'+p4.nome+'\t'+p4.nota)
