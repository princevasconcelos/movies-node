const router = require('express').Router();
const controller = require('../controller/MovieController');

//nem chama o controler se nao passar por esse middleware
function isValidId(request, response, next) {
    if (request.params.id && request.params.id.length !== 24) {
        let err = new Error('invalid id')
        err.status = 422
        return next(err)
    }
    next()
}

router.get('/', controller.list);
router.get('/:id', isValidId, controller.byId);
router.post('/', controller.create);
router.put('/:id', isValidId, controller.update);
router.patch('/:id', isValidId, controller.patch);
router.delete('/:id', isValidId, controller.delete);

module.exports = router;