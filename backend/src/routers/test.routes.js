import { Router } from "express";
import { handleGetrequest  , handlePostRequest , handleTestResponseGet} from "../controllers/test.controller.js";
import authMiddleware from "../middleware/authMiddleware.js"
const testRouter = Router();

testRouter.get("/:id",handleGetrequest );
testRouter.post('/:id' , authMiddleware , handlePostRequest);
testRouter.post('/:id/result' , authMiddleware , handleTestResponseGet);

export default testRouter;
