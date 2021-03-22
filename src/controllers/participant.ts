import { Request, Response, NextFunction } from "express";

import logging from "../config/logging";
import { dbOps } from "../config/mysql";
import { Participant } from "../models/participant";

const NAMESPACE = "CONTROLLERS";

type ReqParams = {
  participantId?: string;
};

type ReqBody = Omit<Participant, "id">;

const getAllPersons = (req: Request, res: Response, next: NextFunction) => {
  let query = "SELECT * FROM `participant`";

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

const getPersonByPersonID = (req: Request<ReqParams>, res: Response, next: NextFunction) => {
  let query = "SELECT * FROM `participant` WHERE `participant_id` = ? ";
  let escapeValues = [req.params.participantId];

  dbOps(query, escapeValues)
    .then((queryRes) => {
      logging.info(NAMESPACE, `Connected to DB OK`);
      const [rows, fields] = queryRes; // only cares about the row data -> arr destrct
      return res.status(200).json({ data: rows });
    })
    .catch((queryErr) => {
      logging.error(NAMESPACE, queryErr.message, queryErr);
    });
};

const getPersonFullName = (req: Request, res: Response, next: NextFunction) => {};

const createPerson = (req: Request<ReqParams, {}, ReqBody>, res: Response, next: NextFunction) => {
  let query = `INSERT INTO participant (first_name, last_name, participant_id, dob, email) 
  VALUES (?, ?, ?, ?, ?)`;
  let escapeValues = [req.body.first_name, req.body.last_name, req.body.participant_id, req.body.dob, req.body.email];

  dbOps(query, escapeValues)
    .then((queryRes) => {
      logging.info(NAMESPACE, `Connected to DB OK`);
      const [rows, fields] = queryRes; // only cares about the row data -> arr destrct
      return res.status(200).json({ msg: `Entry with ${req.body.participant_id} has been created.` });
    })
    .catch((queryErr) => {
      logging.error(NAMESPACE, queryErr.message, queryErr);
    });
};

const editPersonByPersonID = (req: Request<ReqParams, {}, ReqBody>, res: Response, next: NextFunction) => {
  let query = `UPDATE participant SET first_name = ?, last_name = ?, dob = ?, email = ? WHERE participant_id = ?`;
  let escapeValues = [req.body.first_name, req.body.last_name, req.body.dob, req.body.email, req.body.participant_id];

  dbOps(query, escapeValues)
    .then((queryRes) => {
      logging.info(NAMESPACE, `Connected to DB OK`);
      const [rows, fields] = queryRes; // only cares about the row data -> arr destrct
      return res.status(200).json({ msg: `Entry with ${req.body.participant_id} has been updated.` });
    })
    .catch((queryErr) => {
      logging.error(NAMESPACE, queryErr.message, queryErr);
    });
};

const cac = (req: Request, res: Response, next: NextFunction) => {};

const editPersonByPersonName = (req: Request<ReqParams, {}, ReqBody>, res: Response, next: NextFunction) => {
  let query = `UPDATE participant SET first_name = ?, participant_id = ?, dob = ?, email = ? WHERE last_name = ?`;
  let escapeValues = [req.body.first_name, req.body.participant_id, req.body.dob, req.body.email, req.body.last_name];

  dbOps(query, escapeValues)
    .then((queryRes) => {
      logging.info(NAMESPACE, `Connected to DB OK`);
      const [rows, fields] = queryRes; // only cares about the row data -> arr destrct
      return res.status(200).json({ msg: `Entry with ${req.body.last_name} has been updated.` });
    })
    .catch((queryErr) => {
      logging.error(NAMESPACE, queryErr.message, queryErr);
    });
};

const deletePersonByPersonID = (req: Request<ReqParams>, res: Response, next: NextFunction) => {
  let query = "DELETE FROM `participant` WHERE `participant_id` = ?";
  let escapeValues = [req.params.participantId];

  dbOps(query, escapeValues)
    .then((queryRes) => {
      logging.info(NAMESPACE, `Connected to DB OK`);
      const [rows, fields] = queryRes; // only cares about the row data -> arr destrct
      return res.status(200).json({ msg: `Entry with ${req.params.participantId} has been deleted.` });
    })
    .catch((queryErr) => {
      logging.error(NAMESPACE, queryErr.message, queryErr);
    });
};

export { getAllPersons, getPersonByPersonID, createPerson, editPersonByPersonID, deletePersonByPersonID };
