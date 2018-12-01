describe('main tests', () => {
    it('should GET /', () => {
        request
            .get('/')
            .then(response => {
                assert.equal(response.status, 200)
            })
    })
    it('should GET /notFound and receive 404', () => {
        request
            .get('/banana')
            .then(response => {
                assert(response.status, 404)
            })
    })
})