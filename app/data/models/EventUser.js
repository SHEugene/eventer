module.exports = function (sequelize, DataTypes) {
    const EventUser = sequelize.define('EventUser', {}, {
        tableName: 'EventUser'
    });
    EventUser.associate = function (db) {
        db.EventUser.belongsTo(db.Event);
        db.EventUser.belongsTo(db.User);
    };
    return EventUser;
};
