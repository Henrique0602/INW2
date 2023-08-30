const http = require('http');


const server= http.createServer(function(request, response){

    response.writeHead(200,{"content-type" :"text/html"});
    if(request.url == "/"){
        response.write("<h1>Pagina principal</h1>")
    }
    else if(request.url == "/login"){
        response.write("<h1>Acesso ao login do projeto</h1>")
    }
    else{
        response.write("<h1>Essa pagina não existe</h1>")
    }
    response.end();

})

const port = 3000;
server.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}`);
});