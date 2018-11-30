module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    surname: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    password: DataTypes.STRING,
    city: DataTypes.STRING,
    country: DataTypes.STRING,
    profilePhotoS3Key: DataTypes.STRING,
    DOB: DataTypes.DATE,
    authorizationType: DataTypes.ENUM('EMAIL', 'GOOGLE'),
  }, {
    tableName: 'User',
  });
  return User;
};
