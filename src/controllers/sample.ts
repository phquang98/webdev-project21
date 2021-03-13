import { Request, Response, NextFunction } from "express";
import logging from "../config/logging";

const NAMESPACE = "Sample controller";

const sampleHealthCheck = (req: Request, res: Response, next: NextFunction) => {
  logging.info(NAMESPACE, `Checking API online or not`);
  return res.status(200).json({
    msg: "API online",
  });
};

export { sampleHealthCheck };
