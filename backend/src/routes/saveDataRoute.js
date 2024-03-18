import express from 'express'
import { saveDataController } from '../controllers/saveDataController.js';

const router = express.Router();

router.route('/saveData').post(saveDataController)

export default router;