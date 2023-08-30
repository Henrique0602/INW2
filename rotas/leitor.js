const fs = require('fs')

fs.readFileSync('/index.html', (error,arquivo) => {
    if(error){ 
        throw  error;
       
    }

    console.log(arquivo)
   

})

var arquivo = fs.readFileSync('/index.html');
console.log(arquivo);