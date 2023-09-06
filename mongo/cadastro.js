const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/livros',
{useNewUrlParser : true, 
 useUnifiedTopology : true, 
 serverSelectionTimeoutMS : 10000});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'))

db.once('open', function(){
    console.log("Estamos logados no mongodb");
});

const produtoSchema = new mongoose.Schema({
    Descricao : String,
    Ano : Number,
    Valor : Number,
    Estoque : Number,
   
});

const produto = mongoose.model("produto", produtoSchema);

const Diario = new produto({
    Descricao :'Greg é um garoto comum de 11 anos que vai à escola e enfrenta os desafios da pré-adolescência como milhões de outros. O que o torna tão especial é a vontade de dividir essas experiências com todo mundo, para o caso de tornar-se rico e famoso quando crescer.' ,
    Ano : 2007,
    Valor : 10,
    Estoque : 4
})

console.log(Diario.Descricao)
console.log(Diario.Ano)
console.log(Diario.Valor)
console.log(Diario.Estoque)

Diario.save();

const Extraordinário = new produto({
    Descricao : 'Wonder é um romance infantil escrito por Raquel Jaramillo, sob o pseudônimo R. J. Palacio. Publicada em 14 de fevereiro de 2012, conta a história de Auggie Pullman, um garoto que sofre da síndrome de Treacher Collins, que causa deformação facial.',
    Ano : 2012,
    Valor : 50,
    Estoque : 100
   
})
console.log(Extraordinário.Descricao)
console.log(Extraordinário.Ano)
console.log(Extraordinário.Valor)
console.log(Extraordinário.Estoque)

Extraordinário.save();