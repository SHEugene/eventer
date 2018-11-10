const  authorisationType = require('../data/enums/authorizationType');
const userController= require('../services/userService');
const  bcrypt = require('bcrypt');
module.exports = {
	registration : async function (name,email, password, type) {
		if(name && email) {
			//registration with email
			if(type === authorisationType.EMAIL) {

				const alreadyRegistered= await  userController.findUserByEmail(email);
				if(!alreadyRegistered){
					return processRegistrationFromEmail(name, email,password);
				} else {
					throw createError('This email already registered', 400)
				}


			} else if (type === authorisationType.GOOGLE) {
				return  processRegistrationFromGoogle(email,name, type);
			}
		} else {
			throw createError('Name or Email not exist', 400)
		}
	}
}

function processRegistrationFromEmail (name, email,password) {
	if(password) {
		const  salt = bcrypt.genSaltSync(10);
		const passwordToSave = bcrypt.hashSync(password, salt);
		return userController.create({
			name:name,
			email:email,
			password: passwordToSave
		});
	}else {
		throw createError('Password not exist', 400)
	}
}

function processRegistrationFromGoogle (email,name) {

}

function createError (message, status) {
	let err = new Error(message);
	err.status = status;
	return err;
}
