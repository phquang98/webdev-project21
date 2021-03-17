import mysql2, { ConnectionOptions } from "mysql2";

import config from "./config";

const ConnParams: ConnectionOptions = {
  user: config.mysql.username,
  password: config.mysql.password,
  host: config.mysql.host,
  database: config.mysql.db,
};

// Create a conn instance + connect() to the DB + execute the query
const dbOps = async (queryValue: string) => {
  const connInstance = mysql2.createConnection(ConnParams).promise();
  return await connInstance.query(queryValue);
};

export { dbOps };
