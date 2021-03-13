import express from "express";

import { sampleHealthCheck } from "../controllers/sample";

export const sampleRouter = express.Router();

sampleRouter.get("/ping", sampleHealthCheck);
