import { Sequelize } from 'sequelize';
import tedious from 'tedious';

const database = process.env.DB_DATABASE || '';
const username = process.env.DB_USERNAME || '';
const password = process.env.DB_PASSWORD || '';
const host = process.env.DB_HOST || 'localhost';
const port = parseInt(process.env.DB_PORT || '1433');

export const sequelize = new Sequelize(database, username, password, {
  host: host,
  port: port,
  dialect: 'mssql',
  dialectModule: tedious,
  dialectOptions: {
    options: {
      encrypt: true,
      trustServerCertificate: true,
    },
  },
  logging: false, // Set to console.log if you want to see SQL queries
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

export default sequelize;
