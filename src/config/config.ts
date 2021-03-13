import dotenv from "dotenv";

// load .env files to read all the key=value pair
dotenv.config();

const SERVER_PORT = process.env.SERVER_PORT || 5000;
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || "localhost";

const SERVER = {
  hostname: SERVER_HOSTNAME,
  port: SERVER_PORT,
};

// Config obj of the whole app
const config = {
  server: SERVER,
};

export default config;
