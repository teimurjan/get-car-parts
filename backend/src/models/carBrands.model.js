export default (sequelize, DataTypes) =>
  sequelize.define('carBrands', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
  });
