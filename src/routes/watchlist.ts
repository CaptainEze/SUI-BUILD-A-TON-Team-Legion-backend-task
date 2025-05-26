import { Router } from "express";
import { AuthMiddleware } from "../middlewares/authMiddleware";

const router = Router();

router.use(AuthMiddleware) // test auth middleware

export default router;