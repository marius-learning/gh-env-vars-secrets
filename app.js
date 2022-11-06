import express from "express";
import bodyParser from "body-parser";

import db from "./data/database.js";
import eventRouter from "./routes/events.js";

const app = express();

app.use(bodyParser.json());

app.use((req, _res, next) => {
  req.db = db;
  next();
});

app.use(eventRouter);

app.listen(process.env.PORT || 3000);
