import Sequelize from 'sequelize';
import makeModels from './models';

const makeDb = (sequelizeConfig) => {
  const sequelize = new Sequelize(sequelizeConfig);
  return makeModels(sequelize);
};

export default makeDb;
