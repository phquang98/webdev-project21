import express from "express";

import {
  getAllPersons,
  getPersonByPersonID,
  createPerson,
  editPersonByPersonID,
  deletePersonByPersonID,
  uploadXlsxDataToDB,
} from "../controllers/participant";

const participantRouter = express.Router();

// --- GET ---
participantRouter.get("/", getAllPersons);
participantRouter.get("/:participantId", getPersonByPersonID);

// --- POST ---
participantRouter.post("/", createPerson);
participantRouter.post("/upload", uploadXlsxDataToDB); // maybe send the filePath from req.body ??

// --- PUT ---
participantRouter.put("/", editPersonByPersonID);

// --- DELETE ---
participantRouter.delete("/:participantId", deletePersonByPersonID);

export { participantRouter };
