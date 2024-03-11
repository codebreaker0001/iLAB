import dotenv from "dotenv";

import connectDB from "../db/index.js";

import { HealthData } from "../models/healthData.model.js";
import { readExcelController } from "../controllers/excelController.js";

dotenv.config({
    path:"./.env",
    
});


connectDB()
.then(async()=>{
    const data = readExcelController();
    await HealthData.create(data);
    // console.log(" data is: ",data)
    
})
.catch((err)=>{
    console.log("MongoDB connection Failed !!!", err);
})
// await HealthData.deleteMany();