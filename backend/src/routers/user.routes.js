import { Router } from "express";
import { handleUserGetRequest , handleUserPostRequest} from '../controllers/user.controller.js'
const userRouter = Router();

userRouter.get('/' , handleUserGetRequest)
userRouter.post('/' , handleUserPostRequest);

export default userRouter;