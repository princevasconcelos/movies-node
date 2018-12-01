const repository = require('../repository/MovieRepository.js')

const MovieController = {
    list(request, response, next) {
        let query = {};
        if(request.query.title) //filtro -> /?title=Hobbit
            query = { title: new RegExp(request.query.title, 'i') } // i === insensitive
        repository.list(query, (err, data) => {
            if (err) return next(err)
            response.json(data);
        });
    },
    byId(request, response, next) {
        let id = request.params.id
        repository.byId(id, (err, data) => {
            if (!data) {
                let err = new Error('Movie not found')
                err.status = 404
                return next(err)
            }

            response.json(data)
        })
    },
    create(request, response, next) {
        let body = request.body
        repository.create(body, (err, data) => {
            response.status(201).json(data)
        })
    },
    update(request, response, next) {
        let id = request.params.id
        let body = request.body

        delete body._id //boa pratica: seguranca pro cara n trocar o id no update

        repository.update(id, body, (err, data) => {
            response.json(data)
        })
    },
    delete(request, response, next) {
        let id = request.params.id
        repository.delete(id, (err, data) => {
            response.status(204).send('')
        })
    }
}

module.exports = MovieController;