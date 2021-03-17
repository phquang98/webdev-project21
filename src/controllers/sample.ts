import { Request, Response, NextFunction } from "express";

import logging from "../config/logging";
import { dbOps } from "../config/mysql";

const NAMESPACE = "CONTROLLERS";

const getAllUsers = (req: Request, res: Response, next: NextFunction) => {
  let query = "SELECT * FROM users";

  dbOps(query)
    .then((queryRes) => {
      logging.info(NAMESPACE, `Connected to DB OK`);
      const [rows, fields] = queryRes; // only cares about the row data -> arr destrct
      return res.status(200).json({ data: rows });
    })
    .catch((queryErr) => {
      logging.error(NAMESPACE, queryErr.message, queryErr);
    });
};

export { getAllUsers };
