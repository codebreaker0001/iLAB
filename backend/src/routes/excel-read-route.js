import {readExcelController}  from '../controllers/excelController.js';

import express from "express";

const router = express.Router();

router.get('/readExcel', readExcelController);

export default router;