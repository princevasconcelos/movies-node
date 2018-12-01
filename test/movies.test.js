describe('CRUD movies tests', () => {
    let id = '5c0283e800151bc73b727677'
    
    it('GET /api/movies should list all', () => {
        return request
            .get('/api/movies')
            .then(response => {
                assert.ok(response.body.items)
                assert.ok(response.body.items.length > 1)
                assert.ok(response.body.total)
                assert.equal(response.status, 200)
            })
    })

    it('GET /api/movies/:id should return one movie', () => {
        return request
            .get(`/api/movies/${id}`)
            .then(response => {
                assert.ok(response.body)
                assert.equal(response.status, 200)
                assert.equal('Star wars 5', response.body.title)
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

