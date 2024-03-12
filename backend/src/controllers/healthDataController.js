import { HealthData } from "../models/healthData.model.js";

export const getHealthData = async (req, res)=>{
    const data = await HealthData.find(req.query);
    // console.log("data size is" , data.length)
    res.status(200).json(data);
} 