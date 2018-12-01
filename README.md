npm init --yes

npm install --save express

curl -X POST http://localhost:3000/contato

npm install --save-dev nodemon

**nodemon(atualizacao automatica) serve para subir o servidor e restarta o servidor automaticamente para mim.**

<!--  Lógica até agora
1) app -> router -> controller diferente para cada rota 

2) app -> router -> MovieController -> RepositoryController (mock)
-->

npm install --save body-parser

brew install mongodb
sudo !!
sudo mkdir -p /data/db
whoami
sudo !!
sudo chown -R joaquim:staff /data/db
mongod

**mongodb não consegue resolver todos os casos, em alguns casos eh bom o SQL**

**REPLICASET: mongodb precisa ter no minimo 3 instancias(1 master e 2 slaves). O node so escreve na master mas pode ler das 3**

heroko pode subir a aplicacao de graca
mongo pode fica de graca no mLAB pq o mongo comprou o mLab

db.movies.insert({ title: 'Caca fantasmas', releaseDate: new Date() })
db.movies.findOne()
db.movies.find({ title: 'Star Wars' })
db.movies.count()
db.movies.distinct('title')
db.movies.find({}, { _id: false })
db.movies.find({}, { _id: false, title: 1 })
db.movies.count({}, { _id: false, title: 1 })
db.movies.find({ releaseDate: {$gte: new Date(2019, 0 ,1)} })
db.movies.find({ title: /^s/i }, { _id: 0, title: 1 }) //começa com a letra S, i === case insensitive
db.movies.find({ title: /[0-9]$/i }, { _id: 0, title: 1 }) //contem numeros
db.movies.update({ title: /star wars/i }, {$set: { studio: 'Disney' }, { multi: true }}) //multi roda pra todos os registros encontrados

//quando usa o update sem nada ele troca tudo pelo que eh mandado, pra inserir/trocar uma parte tem de usar o $set

db.movies.update({ title: 'Capitao Marvel' }, { $set: { studio: 'Marvel'}}, { upsert: true }) //atualiza ou cria se nao encontrar o registro

find(where, filter)

npm install --save mongojs
npm install --save-dev mocha istanbul supertest

curl -X POST -d '{ "title": "Homem de Ferro"}' -H 'content-type: application/json' http://localhost:3000/api/movies

curl -X DELETE http://localhost:3000/api/movies/5c0283cd00151bc73b727676

pkill 542324 //matar processo

npm install --save bluebird


silence is gold <3

//service eh uma camada entre o controle e o repository
//service eh uma camada de mais logica


//nginx eh um proxy pro node

//redis eh um cache de chave/valor
//TTL - time to live (cada chave tem um tempo de vida)