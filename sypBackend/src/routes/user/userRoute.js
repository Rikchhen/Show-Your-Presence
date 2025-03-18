import express from "express";
import { userController } from "../../controller/user/userController.js";
import { authGuard, authGuardAdmin } from "../../middleware/token-middleware.js";

const router = express.Router();

router.post("/create", userController.create);

router.get("/", authGuard, authGuardAdmin, userController.getAll);

router.get("/:id", authGuard, authGuardAdmin, userController.getById);

router.put("/:id", authGuard, userController.update);

router.delete("/:id", authGuard, authGuardAdmin, userController.deleteById);

export { router as userRouter };
