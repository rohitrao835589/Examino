import { Router } from "express";
import { handleGetrequest  , handlePostRequest , handleTestResponseGet} from "../controllers/test.controller.js";
import authMiddleware from "../middleware/authMiddleware.js"
const testRouter = Router();

testRouter.get("/:id",handleGetrequest );
testRouter.get('/:id/result' , authMiddleware , handleTestResponseGet);
testRouter.post('/:id' , authMiddleware , handlePostRequest);

export default testRouter;
