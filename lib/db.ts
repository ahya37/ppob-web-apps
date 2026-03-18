import "server-only";
import sql from "mssql";

let poolPromise: Promise<sql.ConnectionPool> | null = null;

export const getPool = async () => {
  if (poolPromise) return poolPromise;

  const config: sql.config = {
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    server: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT || "1433"),
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000,
    },
    options: {
      encrypt: true,
      trustServerCertificate: true,
    },
  };

  poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then((pool) => {
      console.log("Connected to MSSQL");
      return pool;
    })
    .catch((err) => {
      console.error("Database Connection Failed! ", err);
      poolPromise = null;
      throw err;
    });

  return poolPromise;
};

export { sql };
