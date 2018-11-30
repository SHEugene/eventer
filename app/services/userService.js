const User = require('../data/models').User;

module.exports = {
  findUserByEmail(email) {
    return User.find({
      where: {
        email,
      },
    });
  },

  create(attributes) {
    return User.create(attributes);
  },
};
