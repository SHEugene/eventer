module.exports = function (sequelize, DataTypes) {
	const User =  sequelize.define('User', {
			name: {
				type: DataTypes.STRING,
				allowNull:false,
				validate: {
					notEmpty:true
				}
		},
			surname: {
			type: DataTypes.STRING,
			allowNull:false,
			validate: {
				notEmpty:true
			}
		},
			email: {
			type: DataTypes.STRING,
			allowNull:false,
			validate: {
				notEmpty:true
			}
		},
			password: DataTypes.STRING,
			city: DataTypes.STRING,
			country:DataTypes.STRING,
			profilePhotoS3Key:DataTypes.STRING,
			DOB:DataTypes.DATE,
			authorisationType:DataTypes.ENUM('EMAIL','GOOGLE')
	});
	return User;
}