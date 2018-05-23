export default (sequelize) => {
  const db = {
    carBrands: sequelize.import('./carBrands.model'),
    carModels: sequelize.import('./carModels.model'),
    offers: sequelize.import('./offers.model'),
    orders: sequelize.import('./orders.model'),
    sellers: sequelize.import('./sellers.model'),
    users: sequelize.import('./users.model'),
    requests: sequelize.import('./requests.model'),
  };

  db.carModels.belongsTo(db.carBrands);

  db.orders.belongsTo(db.carModels);
  db.orders.belongsTo(db.users);

  db.offers.belongsTo(db.orders);
  db.offers.belongsTo(db.sellers);

  db.requests.belongsTo(db.orders);
  db.requests.belongsTo(db.sellers);

  Object.values(db).forEach(model => model.associate && model.associate(db));

  return db;
};
