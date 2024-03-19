import { HealthData } from "../models/healthData.model.js";

export const saveDataController = async (req, res) => {
    try {
      // Extract data from the request body
      // const dataToSave = new HealthData(req.body);
  
      // Create a new document using the schema and save it to the database
      const savedFile = await HealthData.create(req.body)

      console.log('file is saved into database')

      console.log('reqis', req.body)

      console.log('File saved successfully:', savedFile);
      res.status(200).send('7')
  
    } catch (error) {
      // Handle any errors and send an error response back to the client
      console.error('Error saving data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }