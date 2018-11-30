//TODA A CONFIGURAÇÃO DO EXPRESS

//20-25 modulos

//API RESTFUL (TCC de um maluco) (metodos, status code, rotas)

// Metodos 
// - GET
// - POST
// - PUT
// - DELETE 204
// - PATH
// - DELETE
// - OPTIONS
// - HEAD

// Status Code
// 1xx - CONTINUE (responsa de um option)
// 2xx - SUCESSO
// 3xx - REDIRECT
// 4xx - CLIENTE (acessou uma rota que nao existe)
// 5xx - SERVIDOR (banco de dados saiu do ar)

// Rotas
// GET /produtos - lista
// GET /produto:id - um produto por id
// POST /produto - cria
// PUT /produto/:id - atualiza

const express = require('express');
const app = express();

//declaracao de uma rota (node eh feito pra rotas)
app.get('/', (request, response, next) => {
    response.send('hi Novatec');
})
app.get('/contato', (request, response, next) => {
    response.send('email@novatec.com.br');
})
app.post('/contato', (request, response, next) => {
    response.status(201) //201 === criado
    response.send('email@novatec.com.br');
})

app.listen(3000);