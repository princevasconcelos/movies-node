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

app.use(require('./router'))
app.use((request, response, next) => {
    let err = new Error('não achei');
    err.status = 404;
    next(err);
})
app.use((err, request, response, next) => {
    console.log(err.stack);

    response.status(err.status || 500);
    response.json({ err: err.message });
})


app.listen(3000);