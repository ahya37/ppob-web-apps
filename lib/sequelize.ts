import "server-only";
import { Sequelize } from "sequelize";
import tedious from "tedious";

let _sequelize: Sequelize | null = null;

const createSequelize = (): Sequelize => {
  const database = process.env.DB_DATABASE || "";
  const username = process.env.DB_USERNAME || "";
  const password = process.env.DB_PASSWORD || "";
  const host = process.env.DB_HOST || "localhost";
  const port = parseInt(process.env.DB_PORT || "1433");

  return new Sequelize(database, username, password, {
    host,
    port,
    dialect: "mssql",
    dialectModule: tedious,
    dialectOptions: {
      options: {
        encrypt: true,
        trustServerCertificate: true,
      },
    },
    logging: false,
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  });
};

export const sequelize: Sequelize = new Proxy({} as Sequelize, {
  get(_, prop: keyof Sequelize) {
    if (!_sequelize) {
      _sequelize = createSequelize();
    }
    return _sequelize[prop];
  },
});

export default sequelize;
