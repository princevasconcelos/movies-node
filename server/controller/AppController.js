const AppController = {
    notFound(reqiest, response, next) {
        let err = new Error('Página não encontrada.');
        err.status = 404;
        next(err);
    },
    errorHandler(err, request, response, next) {
        if (err.status !== 404) console.log('stack: ', err.stack);
    
        response.status(err.status || 500);
        response.json({ err: err.message });
    }
};

module.exports = AppController;