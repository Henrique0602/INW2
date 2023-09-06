//mongodb://localhost:27017

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/exemplo',
{useNewUrlParser : true, 
 useUnifiedTopology : true, 
 serverSelectionTimeoutMS : 10000});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'))

db.once('open', function(){
    console.log("Estamos logados no mongodb");
});

const pessoaSchema = new mongoose.Schema({
    nome : String,
    idade : Number,
    profissao : String
});

const Pessoa = mongoose.model("Pessoa", pessoaSchema);

const marcos = new Pessoa({
    nome : 'Marcos',
    idade : 25,
    profissao : 'Lutador de UFC'
})

console.log(marcos.nome)
console.log(marcos.idade)
console.log(marcos.profissao)


marcos.save();

const Giulia = new Pessoa({
    nome : 'Giulia',
    idade : 23,
    profissao : 'Enfermeira'
})
console.log(Giulia.nome)
console.log(Giulia.idade)
console.log(Giulia.profissao)

Giulia.save();