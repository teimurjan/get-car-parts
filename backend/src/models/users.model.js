export default (sequelize, DataTypes) =>
  sequelize.define('users', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    platform: { type: DataTypes.STRING, allowNull: false },
    notificationToken: { type: DataTypes.UUID, allowNull: false },
  });
