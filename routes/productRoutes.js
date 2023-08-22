import {Router} from "express";
import ProductController from "../controllers/ProductController.js";

const router = new Router()

router.post('/', ProductController.create)
router.get('/', ProductController.getAll)

export default router