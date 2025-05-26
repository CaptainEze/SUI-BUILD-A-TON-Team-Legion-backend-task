import { Router } from "express";
import { AuthMiddleware } from "../middlewares/authMiddleware";

import {
  createItem,
  getAllItems,
  updateItem,
  deleteItem,
} from '../controllers/watchlistController';

const router = Router();
router.use(AuthMiddleware)

router.post('/', createItem);
router.get('/', getAllItems);
router.patch('/:id', updateItem);
router.delete('/:id', deleteItem);

export default router;