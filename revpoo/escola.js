const leia = require("prompt-sync")()


// arrays ou vetores

let Alunos = ['Carlos', 'Richard', 'Amanda', 'Giulia']
let Notas = [0,0,0,0]

for( let x = 0; x<Alunos.length; x++){
    console.log(Alunos[x])
    Notas[x] = parseInt(leia("Digite quantos pontos esse Aluno tem :  "))
}

console.log("Boletim")
console.log("Aluno\t Notas \t Situação")
for(let x=0; x<=Alunos.length; x++){
    console.log(Alunos[x] +'\t' + Notas)
}if(Notas>=5){
 
    console.log("Aprovado com nota " + Notas+'\tS')

}else (Notas < 5)
   console.log("Reprovado com nota " + Notas+'\tN')



