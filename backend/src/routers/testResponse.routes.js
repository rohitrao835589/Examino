import {Router} from "express"
import { handleTestResponsePost } from "../controllers/testResponse.controller.js";
const router = Router();

router.post('/:id',handleTestResponsePost);

export default router;