import { Router } from "express";
import { handleGetrequest  , handlePostRequest} from "../controllers/test.controller.js";
const testRouter = Router();

testRouter.get("/:id",handleGetrequest );
testRouter.post('/:id' , handlePostRequest);
export default testRouter;
