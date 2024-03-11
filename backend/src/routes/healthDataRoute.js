import express from "express";

import { getHealthData } from "../controllers/healthDataController.js";

const router = express.Router();

router.route('/healthData').get(getHealthData);

export default router;