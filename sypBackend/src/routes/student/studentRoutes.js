import express from "express";
import {
  create,
  getAll,
  getById,
  update,
  deleteById,
} from "../../controller/student/studentController.js";
import { authGuard, authGuardAdmin } from "../../middleware/token-middleware.js";

const router = express.Router();

// Public routes
router.get("/", getAll); // Get all students
router.get("/:id", getById); // Get student by ID

// Protected routes (Admin only)
router.post("/create", authGuard, authGuardAdmin, create); // Create a new student
router.put("/:id", authGuard, authGuardAdmin, update); // Update student by ID
router.delete("/:id", authGuard, authGuardAdmin, deleteById); // Delete student by ID

export { router as studentRouter };
