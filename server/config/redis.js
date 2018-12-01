const bluebird = require('bluebird')
const redis = bluebird.promisifyAll(require('redis'))
const client = redis.createClient({
    host: '192.168.15.36',
    port: 6379
})

client.on('error', function(err) {
    console.log('Error '+ err)
})

module.exports = client