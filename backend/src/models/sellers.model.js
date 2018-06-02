export default (sequelize, DataTypes) =>
  sequelize.define('sellers', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    phoneNumber: { type: DataTypes.STRING, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
    notificationToken: { type: DataTypes.UUID, allowNull: false },
  });
