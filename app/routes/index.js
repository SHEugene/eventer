var createRouter = require('express').Router;
var router = createRouter({ strict: true });


module.exports = function () {
    router.get('/login', function (req, res, next) {
        return res.json({
            hello:'true'
        });
    });
	router.use(function notFound (req, res, next) {
		res.status(404);
		res.json({message: 'not found'});
	});
    return router;
};
