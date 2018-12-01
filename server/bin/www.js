//bin são as formas de entrada na aplicação

const app = require('../app');
const cluster = require('cluster')
const numCpus = require('os').cpus().length

if(cluster.isMaster) {
    for(let i = 0; i< numCpus; i++) {
        cluster.fork()  //nao usar com serveless
    }
} else {
    app.listen(3000, () => {
        console.log('server is up!!!');
    })
}