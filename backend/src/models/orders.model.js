export default (sequelize, DataTypes) =>
  sequelize.define('orders', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    vinCode: { type: DataTypes.STRING, allowNull: true },
    year: { type: DataTypes.STRING, allowNull: false },
    partType: { type: DataTypes.STRING, allowNull: false },
    comment: { type: DataTypes.STRING, allowNull: true },
  });
