const db = require('../server/config/mongo')

describe('CRUD movies tests', () => {
    let id
    let expected
    let movie = { title: 'Movie for test' }

    beforeEach(done => {
        
        db.collection('movies').insert(movie, (err, data) => {
            id = data._id.toString()
            expected = { ...movie, _id: id }
            done() //avisa que esse before each e sincrono e ja pode fazer outra coisa
        })
    })

    afterEach(done => {
        db.collection('movies').remove({}, done)
    })
    
    it('GET /api/movies should list all', () => {
        return request
            .get('/api/movies')
            .then(response => {
                assert.ok(response.body.items)
                assert.ok(response.body.items.length === 1)
                assert.ok(response.body.total)
                assert.equal(response.status, 200)
            })
    })

    it('GET /api/movies/:id should return one movie', () => {
        return request
            .get(`/api/movies/${id}`)
            .then(response => {
                assert.deepEqual(response.body, expected)
                assert.ok(response.body)
                assert.equal(response.status, 200)
                assert.equal('Movie for test', response.body.title)
            })
    })

    it('POST /api/movies should create a new movie', () => {
        let movie = {
            title: 'Movie for TDD'
        }

        return request
            .post('/api/movies')
            .send(movie)
            .then(response => {
                assert.equal(response.status, 201)
                assert.ok(response.body)
                assert.equal(response.body.title, 'Movie for TDD')
            })
    })

    it('PUT /api/movies/:id should update movie', () => {
        let movie = {
            title: 'Updated movie title',
            releaseDate: new Date()
        }

        return request
            .put(`/api/movies/${id}`)
            .send(movie)
            .then(response => {
                assert.equal(response.status, 200)
            })
    })

})

