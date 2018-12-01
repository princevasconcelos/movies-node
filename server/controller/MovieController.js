const bluebird = require('bluebird')
/* BLUEBIRD
1) adicionar wrapper no require
2) mudar nome dos metodos para nomeAsync
3) trocar por .then .catch
*/
const repository = bluebird.promisifyAll(require('../repository/MovieRepository.js'))

function notFound(data) {
    if(!data) {
        let err = new Error('movie not found')
        err.status = 404
        throw err
    }
    return data
}

const MovieController = {
    list(request, response, next) {
        let query = {};
        if(request.query.title) //filtro -> /?title=Hobbit
            query = { title: new RegExp(request.query.title, 'i') } // i === insensitive

        Promise.all([
            repository.listAsync(query),
            repository.countAsync(query)
        ])
            .then(datas => {
                response.json({
                    items: datas[0],
                    total: datas[1]
                })
            })
    },
    byId(request, response, next) {
        repository.byIdAsync(request.params.id)
            .then(notFound)
            .then(data => response.json(data))
            .catch(next)
    },
    create(request, response, next) {
        repository.createAsync(request.body)
            .then(data => response.status(201).json(data))
            .catch(next)
    },
    update(request, response, next) {
        let id = request.params.id
        let body = request.body

        delete body._id //boa pratica: seguranca pro cara n trocar o id no update

        repository.updateAsync(id, body)
            .then(data => response.json(data))
            .catch(next)
    },
    patch(request, response, next) {
        let id = request.params.id
        let body = request.body

        delete body._id //boa pratica: seguranca pro cara n trocar o id no update

        repository.patchAsync(id, body)
            .then(data => response.json(data))
            .catch(next)
    },
    delete(request, response, next) {
        let id = request.params.id
        repository.deleteAsync(id)
            .then(data => response.json(data))
            .catch(err)
    }
}

module.exports = MovieController;