const User = require('../data/models').User;
module.exports = {
	findUserByEmail: function (email) {
		return User.find({
			where:{
				email:email
			}
		});
	}
};

