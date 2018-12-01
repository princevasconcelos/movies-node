// cara burro que recebe um pedido e responde
// pergunta pro model e responde pra view

const service = require('../service/MovieService')

//objeto comeca com letra maiuscula
const MainController = {
    home(request, response, next) {
        service.list({})
            .then(datas => {
                response.render('home', {
                    title: 'Server-side Rendering',
                    items: datas[0]
                })
            })
    },
    contact(request, response, next) {
        response.send('Página de contato');
    }
}

module.exports = MainController;