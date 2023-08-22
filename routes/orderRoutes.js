import {Router} from "express";
import OrderController from "../controllers/OrderController.js";

const router = new Router()

router.post('/', OrderController.create)
router.get('/', OrderController.getAll)
router.delete('/:id', OrderController.delete)

export default router