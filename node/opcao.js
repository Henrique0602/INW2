function nomeComIdade(nome,idade){
    if(idade === undefined){
        console.log('Seu nome é ' +nome)
    }
    else{
        console.log(`O seu nome é ${nome}, e você tem ${idade}`)
    }
}

//nomeComIdade("Epanimondas")
//nomeComIdade("Carla",18)
//nomeComIdade(18,"ED",2500)

function repetirFrase(frase,n=5){
    for (let x = 1; x<=n; x++) {
        console.log = (frase + " "+ x);
      
    }
}

repetirFrase("Cuidado, esse assunto é importante",2)