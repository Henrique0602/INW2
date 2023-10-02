// 1- configuração do acesso 

const  mongoose  = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/escola',{
    useNewUrlParser : true,
    useUnifiedTopology : true,
    serverSelectionTimeoutMS : 20000
});

const db = mongoose.connection;

db.on('error', console.error.bind(console,'Falha na conexão!!!!'))

db.once('open', ()=>{
    console.log("Conectado com sucesso!!!");
})


//2 criando o schema 

const alunoSchema = new mongoose.Schema({
        nome : String,
        idade : Number,
        turma : String

})

//3 criando a model (o nome da collection no mongodb)
const Alunos = mongoose.model ('Alunos' , alunoSchema);

// 4- cadastrando varios dados com insertMany

Alunos.insertMany([
    {
        nome : 'Paulo',
        idade : 16,
        turma : 'Turma 1'
    },
    {
        nome : 'Maria',
        idade : 15,
        turma : 'Turma 2'
    },
    {
        nome : 'Marcos',
        idade : 17,
        turma : 'Turma B'
    }
])


async function findAlunos(){
    try{
        const alunos = await Alunos.find({turma : 'Turma 2'})
        console.log('Alunos : ',alunos)
    }
    catch(error){
        console.error('Alunos não encontrados : ', error)
    }
}

findAlunos();