const leia = require('prompt-sync')()


let MAT = []

MAT[0]= "m01"
MAT[1]= "m02"
MAT[2]= "m03"


let nomes = []
nomes[0]= "Marcos"
nomes[1]= "Pedro"
nomes[2]= "Maria"

let notas = []
notas[0]= 5
notas[1]= 6
notas[2]= 8

let situacao
console.log("MAT\tnomes\tnotas\tSituação")
for (let x = 0; x <notas.length; x++) {
    if(notas[x] <=5){
        situacao = "REC"
    }
    else{
        situacao = "Aprovado"
    }
    console.log(MAT[x]+ "\t" +nomes[x]+ "\t" +notas[x]+"\t" +situacao);
    
}
