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

// OUTRAS OPÇÕES
// - Hapi.js
// - Koa
// - Restify.js (somente API)

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const controller = require('./controller/AppController');

app.set('view engine', 'ejs')

//essa ordem eh importante. Usar bodyParser antes dos controllers
//cada use é um middleware
//a ideia do middleware é tratar a requisicao em varios pedaços
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(require('./router'));
app.use(controller.notFound);
app.use(controller.errorHandler);

module.exports = app;