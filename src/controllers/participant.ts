import { Request, Response, NextFunction } from "express";

import logging from "../config/logging";
import { dbOps } from "../config/mysql";

const NAMESPACE = "CONTROLLERS";

const getAllPersons = (req: Request, res: Response, next: NextFunction) => {
  let query = "SELECT * FROM participant";

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

const getPerson = (req: Request, res: Response, next: NextFunction) => {};

const editPersonByPersonID = (req: Request, res: Response, next: NextFunction) => {};

const editPersonByPersonName = (req: Request, res: Response, next: NextFunction) => {};

const deletePerson = (req: Request, res: Response, next: NextFunction) => {};

export { getAllPersons };
