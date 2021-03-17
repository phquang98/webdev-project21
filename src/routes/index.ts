import express from "express";

import { getAllPersons } from "../controllers/participant";

const participantRouter = express.Router();

participantRouter.get("/", getAllPersons);

export { participantRouter };
