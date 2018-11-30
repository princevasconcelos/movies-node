const router = require('express').Router();
const controller = require('../controller/MainController');

//GET é só para um método
router.get('/', controller.home);
router.get('/contato', controller.contact);

//USE é chamado para todos os métodos (get,post,put,delete)
router.use('/api/movies', require('./movies'))

module.exports = router;