export default (sequelize, DataTypes) =>
  sequelize.define('offers', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    price: { type: DataTypes.INTEGER, allowNull: false },
  });
