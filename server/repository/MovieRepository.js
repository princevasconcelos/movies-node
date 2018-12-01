const db = require('../config/mongo')

const MovieRepository = {
    list(query, callback) {
        db.collection('movies').find(query, callback)
    },
    count(query, callback) {
        db.collection('movies').count(query, callback)
    },
    byId(id, callback) {
        //transformar a string q vem em um obj id
        let query = { _id: db.ObjectId(id) }
        db.collection('movies').findOne(query, callback)
    },
    create(body, callback) {
        db.collection('movies').insert(body, callback)
    },
    update(id, body, callback) {
        let query = { _id: db.ObjectId(id) }
        db.collection('movies').update(query, { $set: body }, callback)
    },
    patch(id, body, callback) {
        let query = { _id: db.ObjectId(id) }
        db.collection('movies').update(query, { $set: body }, callback)
    },
    delete(id, callback) {
        let query = { _id: db.ObjectId(id) }
        db.collection('movies').remove(query, callback)
    }
};

module.exports = MovieRepository;