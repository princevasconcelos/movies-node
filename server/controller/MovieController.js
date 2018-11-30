const repository = requre('../repository/MovieRepository.js')

const MovieController = {
    list(request, response, next) {
        let query = {};
        repository.list(query, (err, data) => {
            response.json(data);
        });
    },
    byId(request, response, next) {

    },
    create(request, response, next) {

    },
    update(request, response, next) {

    },
    delete(request, response, next) {

    }
}

module.exports = MovieController;