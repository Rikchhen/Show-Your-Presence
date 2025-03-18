import express from "express";
import { authController } from "../../controller/auth/authController.js";

const router = express.Router();

// Route to check if the server is running properly
router.get("/init", authController.init);

// Login route 
router.post("/login", authController.login);

export { router as authRouter };
