import {Router} from "express";
import ProductController from "../controllers/ProductController.js";
import ProductModel from "../models/product.js";

const router = new Router()

router.post('/', ProductController.create)
router.get('/', ProductController.getAll)

export default router