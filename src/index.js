/*import mongoose from 'mongoose'
import {DB_NAME} from "./constants"*/

import dotenv from 'dotenv'
import connectDB from './db/index.js'

dotenv.config({
  path: './env'
})

connectDB()











/* First Approach/Method to connect to DB and start server

import express from 'express';
const app = express();

;( async () =>{
  try{
   await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`) 
    app.on("error", (err) =>{
      console.log("Error in DB connection: ", err);
      throw err
    })

    app.listen(process.env.PORT, () =>{
      console.log(`Server is running on port ${process.env.PORT}`); 
    })

  }catch (err){
    console.log("Error: ", err);
    throw err;  
  }
})()

*/