//TODA A CONFIGURAÇÃO DO EXPRESS

//20-25 modulos

const express = require('express');
const app = express();

//declaracao de uma rota (node eh feito pra rotas)
app.get('/', (request, response, next) => {
    response.send('hi Novatec');
})

app.listen(3000);