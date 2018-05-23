const { config } = require('dotenv');

config();

module.exports = {
  development: {
    database: process.env.POSTGRES_DB,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgresql',
  },
};
