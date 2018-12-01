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

    },
    update(request, response, next) {

    },
    delete(request, response, next) {

    }
}

module.exports = MovieController;