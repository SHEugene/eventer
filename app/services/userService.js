const User = require('../data/models').User;
module.exports = {
	findUserByEmail: function (email) {
		return User.find({
			where:{
				email:email
			}
		});
	},

	create:function (attributes) {
		return User.create(attributes);
	}
};

