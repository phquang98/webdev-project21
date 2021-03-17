import express from "express";

import logging from "./config/logging";
import config from "./config/config";
import { participantRouter } from "./routes/";
import { topLog, cors, notExisted } from "./middlewares";

const app = express();

// --- Top Lv Middlewares ---

app.use(express.json()); // ~ body-parser; allow req.body -> JSON + no manual JSON.stringify/JSON.parse
app.use(topLog);
app.use(cors);

// --- Routing ---
app.use("/participant", participantRouter);

// --- Error Middlewares ---
app.use(notExisted);

app.listen(config.server.port, () =>
  logging.info(`App`, `Server running on ${config.server.hostname}:${config.server.port}`)
);
