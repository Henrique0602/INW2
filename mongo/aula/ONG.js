const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/ONG',{
    useNewUrlParser : true,
    useUnifiedTopology : true,
    serverSelectionTimeoutMS : 20000
});

const db = mongoose.connection;

db.on('error', console.error.bind(console,'Falha na conexão!!!!'))

db.once('open', ()=>{
    console.log("Conectado com sucesso!!!");
})

const Usuario = new mongoose.Schema({
    email : String,
    senha : String 
})


const Usuarios = mongoose.model('Usuarios',Usuario);


Usuarios.insertMany([
    {
       email : 'roberto.carlos@gmail.com',
       senha : '123456'
    },
    {
        email : 'Carlos.roberto@gmail.com',
        senha : '345678'
    },
    {
        email : 'Cleber.alberto@gmail.com',
        senha : 'Atacante'
    }
])


async function findUsuarios(){
    try{
        const usuarios = await Usuarios.find({})
        console.log('Usuario : ',usuarios)
    }
    catch(error){
        console.error('Usuario não encontrados : ', error)
    }
}

findUsuarios();