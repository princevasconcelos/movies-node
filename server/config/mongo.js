const mongojs = require('mongojs')
const db = mongojs('localhost:27017/cinemark')

db.on('error', err => {
    console.log('caiuu', err)
})

module.exports = db