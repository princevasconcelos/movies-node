const MovieRepository = {
    list(query, callback) {
        let data = [
            { title: 'O Hobbit' },
            { title: 'Sherlock Holmes' },
            { title: 'Senhor dos Aneis' },
            { title: 'Vingadores' },
            { title: 'Máquina Mortífera' },
        ]
        callback(null, data)
    },
    byId() {

    },
    create() {
        
    },
    update() {

    },
    delete() {

    }
};

module.exports = MovieRepository;