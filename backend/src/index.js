import dotenv from "dotenv";
import express from "express";
import router from "./routes/excel-read-route.js";
import connectDB from "./db/index.js";
import {app} from "./app.js";
const port = process.env.PORT || 8000;


dotenv.config({
    path : "./env"
});

connectDB()
.then(()=>{
    app.listen(port, ()=>{
        console.log(`app is listend at port : ${port}`);
    })
})
.catch((err)=>{
    console.log("MongoDB connection Failed !!!", err);
})

