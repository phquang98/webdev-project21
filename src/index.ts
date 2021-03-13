import express from "express";
import http from "http";

import logging from "./config/logging";
import config from "./config/config";
import { sampleRouter } from "./routes/sample";

const NAMESPACE = "Server"; // where the loggings come from
const app = express();

// --- Middlewares ---

// body-parser equivalent; allow req.body have JSON + no manual JSON.stringify/JSON.parse
app.use(express.json());

// Use the logging fncs across all endpoints
app.use((req, res, next) => {
  logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}]`);

  res.on("finish", () => {
    logging.info(
      NAMESPACE,
      `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}], STATUS - [${res.statusCode}]`
    );
  });

  next();
});

// Using cors + allow 5 HTTP verbs
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", `Origin, X-Requested-With, Content-Type, Accept, Authorization`);

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET PATCH DELETE PUT POST");
    return res.status(200).json({});
  }

  next();
});
// --- End Middlewares ---

// --- Routing ---
app.use("/sample", sampleRouter);

// --- Error middlewares ---
app.use((req, res, next) => {
  const err = new Error("Endpoint not existed!");

  return res.status(404).json({
    errMsg: err.message,
  });

  next();
});

// create server
app.listen(config.server.port, () =>
  logging.info(NAMESPACE, `Server running on ${config.server.hostname}:${config.server.port}`)
);
