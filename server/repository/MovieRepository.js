const db = require('../config/mongo')

const MovieRepository = {
    list(query, callback) {
        db.collection('movies').find(query, callback)
    },
    byId(id, callback) {
        //transformar a string q vem em um obj id
        let query = { _id: db.ObjectId(id) }
        db.collection('movies').findOne(query, callback)
    },
    create() {
        
    },
    update() {

    },
    delete() {

    }
};

module.exports = MovieRepository;