var createRouter = require('express').Router;
var router = createRouter({ strict: true });


module.exports = function () {
    router.post('/registration', function (req, res, next) {

    });
	router.use(function notFound (req, res, next) {
		res.status(404);
		res.json({message: 'not found'});
	});
    return router;
};
