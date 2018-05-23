module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('carModels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      carBrandId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'carBrands',
          key: 'id',
        },
      },
    }),
  down: queryInterface => queryInterface.dropTable('carModels'),
};
