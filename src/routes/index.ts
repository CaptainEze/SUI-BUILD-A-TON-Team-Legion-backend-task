import { Router } from "express";
import auth from "./auth";
import watchlist from "./watchlist";

const router = Router();

router.use("/auth", auth);
router.use("/watchlist", watchlist); // test auth middleware

export default router;
