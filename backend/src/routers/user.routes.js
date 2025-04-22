import { Router } from "express";
import { handleLoginRequest , handleRegisterRequest} from '../controllers/user.controller.js'
const userRouter = Router();

userRouter.post('/login' , handleLoginRequest)
userRouter.post('/register' , handleRegisterRequest);

export default userRouter;