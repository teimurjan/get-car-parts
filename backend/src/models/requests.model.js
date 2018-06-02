export default (sequelize, DataTypes) =>
  sequelize.define('requests', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    comment: { type: DataTypes.STRING, allowNull: true },
  });
