
//criação da função
function escreverNoConsole(){
    console.log("Escrevendo na tela usando função!!!")
}


//executando a função

escreverNoConsole();


const textoNoConsole = function(){
    console.log("Segundo exemplo, escrevendo no console")
}

textoNoConsole();

const textoPorParametro=function(texto){
    console.log(texto);
}

textoPorParametro("Terceiro exemplo, este texto é o parametro")

const textoUsandoArrow = texto => {
    console.log(texto)
}

textoUsandoArrow("Quarto exemplo usando arrow function")


// função arrow que recebe um numero e mostra na tela o numero e diz se é par ou ímpar, negativo ou zerado.

const mostrarParImpar = (numero) => {
    if(numero < 0){
        console.log(numero, "o numero digitado é negativo")
    }
    else if(numero == 0){
        console.log(numero, "o numero digitado é zerado")
    }
    else if((numero%2)==0){
        console.log(numero, "o numero digitado é par")
    }
    else{
    console.log( numero, "O numero digitado é impar")
    }
}


mostrarParImpar(15);



function escreveLinha (tamanho=80){
   
}