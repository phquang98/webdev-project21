import dotenv from "dotenv";

// load .env files to read all the key=value pair
dotenv.config();

// --- MYSQL credentials ---
const MYSQL_HOST = process.env.MYSQL_HOST || "localhost";
const MYSQL_DB = process.env.MYSQL_DB || "dbNameHere";
const MYSQL_USERNAME = process.env.MYSQL_USERNAME || "usernameHere";
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD || "passHere";

const MYSQL_CONF = {
  host: MYSQL_HOST,
  db: MYSQL_DB,
  username: MYSQL_USERNAME,
  password: MYSQL_PASSWORD,
};

// --- SERVER credentials ---
const SERVER_PORT = process.env.SERVER_PORT || 5000;
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || "localhost";

const SERVER_CONF = {
  hostname: SERVER_HOSTNAME,
  port: SERVER_PORT,
};

// --- App config obj ---
const config = {
  server: SERVER_CONF,
  mysql: MYSQL_CONF,
};

export default config;
