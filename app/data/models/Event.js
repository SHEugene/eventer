module.exports = function (sequelize, DataTypes) {
    const Event =  sequelize.define('Event', {
        type  :DataTypes.ENUM('OPEN','CLOSE'),
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        maxPeople: DataTypes.INTEGER,
        reason: DataTypes.STRING,
        startedTime: DataTypes.DATE
        }, {
            tableName:'Event'
        }
    );
    Event.associate = function (db) {
        db.Event.belongsTo(db.EventPlace);
        db.Event.belongsTo(db.User, {as:'Author', foreignKey: 'AuthorId'});
        db.Event.belongsToMany(db.User, {
            through: db.EventUser,
            foreignKey: 'EventId',
            otherKey: 'UserId'
        })
    };
    return Event;
};
