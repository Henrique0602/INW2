//sera informada o nome aluno, nota ac, nota at
//se o aluno não informar nota da at direto RECUPERAÇÃO
//a nota inicial de todos os alunos na AC é 5
// se media da AC+AT for menor ou igual a 6 mostra o nome do aluno
// a media e pedi ao mesmo para solicitar recuperacao
// se for superior informar o nome do aluno, a media, e que está aprovado

const notas = (nome,ac=5,at) =>{
    if(at===undefined){
        console.log(`${nome} procure a supervisão, vc esta de recperação`)
    }
    else if((ac+at)/2){
        console.log(`${nome} sua media é ${((ac+at)/2)} você ESTA DE RECUPERAÇÃO`)
    }
    else{
        console.log(`${nome} sua media é ${((ac+at)/2)} você esta aprovado `)
    }
}

notas("Maria", 6, 8)