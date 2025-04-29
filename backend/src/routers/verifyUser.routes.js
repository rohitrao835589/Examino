import { Router } from "express";
import { verifyUser } from "../services/verifyUser.service.js";

const router = Router();

router.get("/", async (req, res) => {
  const isVerified = await verifyUser(req.userID); 
  if (isVerified) {
    res.status(200).send({ success: true, message: "User verified" });
  } else {
    res.status(401).send({ success: false, message: "User not found" });
  }
});

export default router;
