import express, { urlencoded } from "express"
import router from "./routes/excel-read-route.js";
import dataRouter from "./routes/healthDataRoute.js"
import saveDataRouter from "./routes/saveDataRoute.js"
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({origin: process.env.CORS_ORIGIN, credentials:true}));
app.use(cookieParser());
app.use(urlencoded({extended: true, limit:"16kb"}));
app.use(express.json({limit:"16kb"}));
app.use(express.static("public"));

// app.use('/excel',router);
app.use('/api',dataRouter);
app.use('/api/save', saveDataRouter);

export {app};