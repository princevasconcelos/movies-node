// cara burro que recebe um pedido e responde
// pergunta pro model e responde pra view

//objeto comeca com letra maiuscula
const MainController = {
    home(request, response, next) {
        response.send('Bem vindo a página inicial');
    },
    contact(request, response, next) {
        response.send('Página de contato');
    }
}

module.exports = MainController;