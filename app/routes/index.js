var createRouter = require('express').Router;
var router = createRouter({ strict: true });


module.exports = function () {
    router.get('/login', function (req, res, next) {
        return res.json({
            hello:'true'
        });
    });
    return router;
};
