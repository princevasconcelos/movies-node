const router = require('express').Router();
const controller = require('../controller/MainController');

router.get('/', controller.home);
router.get('/contato', controller.contact);

module.exports = router;