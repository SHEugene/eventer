module.exports = function (sequelize, DataTypes) {
    const EventPlace =  sequelize.define('EventPlace', {
            country: {
                type: DataTypes.STRING,
                allowNull:false,
                validate: {
                    notEmpty:true
                }
            },
            city: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            }
        }, {
            tableName:'EventPlace'
        }
    );
    return EventPlace;
};
