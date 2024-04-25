import express from "express";
import {
  sendMessage,
  geteMessages,
} from "../controllers/messages.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/:id", protectRoute, geteMessages);
router.post("/send/:receiverId", protectRoute, sendMessage);

export default router;
