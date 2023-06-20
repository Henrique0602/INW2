const leia = require("prompt-sync")()

let matricula = ["1", "2","3", "4"]
let Alunos = ["Marcos","Pedro","Maria","Paulo"]
let notas = [0,0,0,0]
let situação


console.log("Mat\tAlunos\tnotas")
console.log("-------------------------------")
for(let i=0; i<matricula.length; i++){
    console.log(matricula[i]+'\t'+Alunos[i]+'\t'+notas[i])
}



console.log("-------------------------------")
for(let x=0; x < notas.length; x++){
    notas[x] = parseInt(leia("Digite a nota do aluno "+Alunos[x]+":"))

}


for(let i=0; i<matricula.length; i++){
    console.log(matricula[i]+'\t'+Alunos[i]+'\t'+notas[i])
}

console.log("-------------------------------")
console.log("Alteração de dados")
console.log("-------------------------------")
let matriculas = leia("Digite a matricula do aluno que deseja trocar a nota : ")

for(let i=0; i<matricula.length; i++){
    if(matriculas == matricula [i]){
        console.log("Nota atual  " +notas[i])
        notas[i] = leia("Digite a nova nota : ")
    }
}

console.log("-------------------------------")
console.log("Mat\tAlunos\tnotas")

console.log("-------------------------------")
for (let i = 0; i <notas.length; i++) {
    if(notas[i]<5){
        console.log("-------------------------------")
        console.log( Alunos[i]+ " Voce esta de recuperação")
    }
    else{
       console.log("-------------------------------")
       console.log(Alunos[i]+ " Voce esta aprovado")
    }
    
    
}
