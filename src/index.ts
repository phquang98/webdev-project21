import express from "express";
import raRest from "ra-data-simple-rest";

import logging from "./config/logging";
import config from "./config/config";
import { participantRouter } from "./routes/";
import { topLog, cors, notExisted } from "./middlewares";
import { extractDataFromXlsx, xlsxQueryConstructor } from "./middlewares/upload";

const app = express();

// --- Top Lv Middlewares ---

app.use(express.json()); // ~ body-parser; allow req.body -> JSON + no manual JSON.stringify/JSON.parse
app.use(topLog);
app.use(cors);

// --- Routing ---
app.use("/participant", participantRouter);

// --- Error Middlewares ---
app.use(notExisted);

// --- Delete this part ---
// xlsxQueryConstructor(extractDataFromXlsx("D:/xoa/fakedata1.xlsx", "Fake Data 1")).then((cac) => {
//   console.log(cac);
// });
// --- Delete part end ---

app.listen(config.server.port, () =>
  logging.info(`App`, `Server running on ${config.server.hostname}:${config.server.port}`)
);
