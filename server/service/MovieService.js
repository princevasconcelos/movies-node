const bluebird = require('bluebird')
const repository = bluebird.promisifyAll(require('../repository/MovieRepository.js'))
const redis = require('../config/redis')
const crypto = require('crypto')

const MovieService = {
    list(query) {
        let str = JSON.stringify(query)
        let hash = crypto.createHash('md5').update(str).digest('hex')
        let key = `prince:${hash}`
        return redis.getAsync(key)
            .then(data => {
                if(data) {
                    console.log('!!! leu do redis !!!!')
                    return JSON.parse(data)
                }
                console.log('n leu do redis')
                return Promise.all([
                    repository.listAsync(query),
                    repository.countAsync(query)
                ])
            })
            .then(datas => {
                redis.setAsync(key, JSON.stringify(datas))
                    .catch(console.err)
                return datas
            })
    }
}

module.exports = MovieService