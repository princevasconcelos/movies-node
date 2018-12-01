const MovieRepository = {
    list(query, callback) {
        let data = [
            { title: 'O Hobbit' },
            { title: 'Sherlock Holmes' },
            { title: 'Senhor dos Aneis' },
            { title: 'Vingadores' },
            { title: 'Máquina Mortífera' },
        ]

        if(query.name)
            data = data.filter(i => query.name.test(i.title))

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