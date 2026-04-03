import express from "express";
import {
  loginController,
  profileController,
} from "../controllers/authController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/login", loginController);
router.get("/profile", authMiddleware, profileController);

export default router;
