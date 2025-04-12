import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import connectDb from "./configs/db.config.js";
import testRouter from "./routers/test.routes.js";
import userRouter from "./routers/user.routes.js"
const app = express();
app.use(cors());
connectDb();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/test/", testRouter);
app.use('/user/' , userRouter);

app.listen(port, () => {
  console.log(`Server started \nlocal network -- http://localhost:${port}`);
});
