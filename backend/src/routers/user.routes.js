import { Router } from "express";
import { handleUserGetRequest , handleUserPostRequest} from '../controllers/user.controller.js'
const userRouter = Router();

userRouter.post('/login' , handleUserGetRequest)
userRouter.post('/register' , handleUserPostRequest);

export default userRouter;