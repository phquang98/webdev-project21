import { Request, Response, NextFunction } from "express";

import logging from "../config/logging";

const NAMESPACE = "App";

// logs to console each time endpoint is visited
const topLog = (req: Request, res: Response, next: NextFunction) => {
  logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}]`);

  res.on("finish", () => {
    logging.info(
      NAMESPACE,
      `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}], STATUS - [${res.statusCode}]`
    );
  });

  next();
};

// same usage as cors from npm + also allow only 5 HTTP verbs
const cors = (req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", `Origin, X-Requested-With, Content-Type, Accept, Authorization`);

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET PATCH DELETE PUT POST");
    return res.status(200).json({});
  }

  next();
};

// trigger when no other middlewares runs before it
// must be last middleware
const notExisted = (req: Request, res: Response, next: NextFunction) => {
  const err = new Error("Endpoint not existed!");

  return res.status(404).json({
    errMsg: err.message,
  });

  next();
};

export { topLog, cors, notExisted };
