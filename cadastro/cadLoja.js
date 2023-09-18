const moongose=require('mongoose');
const fs = require('fs');
const csv = require('csv-parser');
const { default: mongoose } = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/loja',
{
    useNewUrlParser : true,
    useUniFiedTopology : true,
    serverSelectionTimeoutMS : 20000
})

//Defini o esquema do nosso projeto vindo do CSV

const produtoSchema = new mongoose.Schema({
    codigo : String,
    descricao : String,
    valor : Number,
    estoque : Number
})

// 2 - criar o model a partir do Schema

const Produtos = mongoose.model('Produtos',produtoSchema);

//3- criar fução usando o fs para ler os dados

function lerCSVSalvarNoMongo(){
    const resultados =  [];

    fs.createReadStream('exemplo - base.csv')
    .pipe(csv())//transformar em objeto

    .on('data', (dados)=>{
        resultados.push(dados);
    })
    .on('end', ()=>{
        Produtos.insertMany(resultados)
        .then(()=>{
            console.log("Dados inseridos com sucesso");
            mongoose.connection.close();

        })
        .catch
    })
}