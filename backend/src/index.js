import dotenv from 'dotenv'
dotenv.config();

import express from 'express'
import cors from 'cors'
import connectDb from './configs/db.config.js';

const app = express();
app.use(cors());
connectDb();

const port = process.env.PORT || 3000;



app.listen( port , ()=>{
    console.log(`Server started \nlocal network -- http://localhost:${port}`);
    
})