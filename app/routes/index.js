const createRouter = require('express').Router;

const router = createRouter({ strict: true });
const _ = require('lodash');
const userController = require('../controllers/userController');


module.exports = function () {
	router.post('/registration', async (req, res, next) => {
		const email = req.body.email;
		const name = req.body.name;
		const password = req.body.password;
		const type = req.body.type;
		try {
			const user = await userController.registration(name, email, password, type);
			res.json({
				name: user.name,
				email: user.email,
			});
		} catch (e) {
			console.log(e);
			res.status(e.status ? e.status : 500);
			res.json({
				error: true,
				message: e.message,
			});
		}
	});
	router.post('/login', async (req, res, next) => {
		const email = req.body.email;
		const password = req.body.password;
		const type = req.body.type;
		try {
			const user = await userController.login(email, password, type);
			res.json(user.dataValues);
		} catch (e) {
			console.log(e);
			res.status(e.status ? e.status : 500);
			res.json({
				error: true,
				message: e.message,
			});
		}
	});

	router.use((req, res, next) => {
		res.status(404);
		res.json({ message: 'not found' });
	});
	return router;
};
