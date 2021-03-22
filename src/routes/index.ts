import express from "express";

import {
  getAllPersons,
  getPersonByPersonID,
  createPerson,
  editPersonByPersonID,
  deletePersonByPersonID,
} from "../controllers/participant";

const participantRouter = express.Router();

// --- GET ---
participantRouter.get("/", getAllPersons);
participantRouter.get("/:participantId", getPersonByPersonID);

// --- POST ---
participantRouter.post("/", createPerson);

// --- PUT ---
participantRouter.put("/", editPersonByPersonID);

// --- DELETE ---
participantRouter.delete("/:participantId", deletePersonByPersonID);

export { participantRouter };
