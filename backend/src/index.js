import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import https from "https";
import fs from "fs";

import connectDb from "./configs/db.config.js";
import testRouter from "./routers/test.routes.js";
import userRouter from "./routers/user.routes.js";
import authMiddleware from "./middleware/authMiddleware.js";
import verifyUserRouter from "./routers/verifyUser.routes.js";
import testResponseRouter from "./routers/testResponse.routes.js"
const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true 
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDb();

// Routes
app.use("/test/", testRouter);
app.use('/user/', userRouter);
app.use('/verifyUser/',authMiddleware , verifyUserRouter);
app.use('/testresponse',authMiddleware , testResponseRouter);


const httpsOptions = {
  key: fs.readFileSync('./localhost-key.pem'),  
  cert: fs.readFileSync('./localhost.pem')      
};

const port = process.env.PORT || 443;

https.createServer(httpsOptions, app).listen(port, () => {
  console.log(`🚀 HTTPS server running at https://localhost:${port}`);
});
