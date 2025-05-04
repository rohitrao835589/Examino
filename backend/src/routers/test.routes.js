import { Router } from "express";
import { handleGetrequest  , handlePostRequest} from "../controllers/test.controller.js";
import authMiddleware from "../middleware/authMiddleware.js"
const testRouter = Router();

testRouter.get("/:id",handleGetrequest );
testRouter.post('/:id' , authMiddleware , handlePostRequest);
export default testRouter;
