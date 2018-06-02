export default (sequelize, DataTypes) =>
  sequelize.define('offers', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    price: { type: DataTypes.INTEGER, allowNull: false },
  });
