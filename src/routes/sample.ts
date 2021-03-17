import express from "express";

import { getAllUsers } from "../controllers/sample";

export const sampleRouter = express.Router();

sampleRouter.get("/ping", getAllUsers);
