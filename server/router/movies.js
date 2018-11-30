const router = require('express').Router();
const controller = require('../controller/MovieController');

router.get('/', controller.list);
// router.get('/:id', controller.byId);
// router.post('/', controller.create);
// router.put('/', controller.update);
// router.delete('/', controller.delete);

module.exports = router;