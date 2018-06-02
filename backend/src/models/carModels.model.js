export default (sequelize, DataTypes) =>
  sequelize.define('carModels', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
  });
