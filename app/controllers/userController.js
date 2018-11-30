const bcrypt = require('bcrypt');
const authorisationType = require('../data/enums/authorizationType');
const userService = require('../services/userService');

module.exports = {
  async registration(name, email, password, type) {
    if (name && email) {
      // registration with email
      if (type === authorisationType.EMAIL) {
        const alreadyRegistered = await userService.findUserByEmail(email);
        if (!alreadyRegistered) {
          return processRegistrationFromEmail(name, email, password);
        }
        throw createError('This email already registered', 401);
      } else if (type === authorisationType.GOOGLE) {
        return processRegistrationFromGoogle(email, name, type);
      }
    } else {
      throw createError('Name or Email not exist', 401);
    }
  },
  async login(email, password, type) {
    if (email) {
      if (type === authorisationType.EMAIL) {
        const user = await userService.findUserByEmail(email);

        if (user) {
          return processLoginFromEmail(user, password);
        }
        throw createError('User not registered', 401);
      } else if (type === authorisationType.GOOGLE) {

      }
    } else {
      throw createError('No email exist', 401);
    }
  },
};

function processRegistrationFromEmail(name, email, password) {
  if (password) {
    const salt = bcrypt.genSaltSync(10);
    const passwordToSave = bcrypt.hashSync(password, salt);
    return userService.create({
      name,
      email,
      password: passwordToSave,
    });
  }
  throw createError('Password not exist', 401);
}

function processRegistrationFromGoogle(email, name) {

}

function processLoginFromEmail(user, password) {
  if (bcrypt.compareSync(password, user.password)) {
    delete user.dataValues.password;
    return user;
  }
  throw createError('Combination login and password not finded', 401);
}

function createError(message, status) {
  const err = new Error(message);
  err.status = status;
  return err;
}
