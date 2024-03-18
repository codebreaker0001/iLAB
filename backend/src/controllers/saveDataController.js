import { HealthData } from "../models/healthData.model.js";

export const saveDataController = async (req, res) => {
    try {
      // Extract data from the request body
      const dataToSave = req.body;
  
      // Create a new document using the schema and save it to the database
      const savedData = await HealthData.create(dataToSave);
      res.status(201).send('7')
    } catch (error) {
      // Handle any errors and send an error response back to the client
      console.error('Error saving data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }