import { Router } from "express";

import getEvent from "../handlers/get.js";
import createEvent from "../handlers/create.js";

const router = Router();

router.route("/").get(getEvent).post(createEvent);

export default router;
