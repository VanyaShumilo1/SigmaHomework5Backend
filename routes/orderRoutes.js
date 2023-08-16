import {Router} from "express";
import OrderModel from "../models/order.js";

const router = new Router()

router.post('/', async (req, res) => {
    try {
        const order = await OrderModel.create({
            fullName: req.body.fullName,
            email: req.body.email,
            address: req.body.address,
            phone: req.body.phone,
            message: req.body.message,
            products: req.body.products,
        })

        res.status(200).json(order)

    } catch (err) {
        res.status(500).json({
            message: 'something went wrong while creating order',
            err
        })
        console.log(err)
    }
})

router.get('/', async (req, res) => {
    try {
        const orders = await OrderModel.find().populate('products.product')

        res.status(200).json(orders)

    } catch (err) {
        res.status(500).json({
            message: 'something went wrong while getting order',
            err
        })
        console.log(err)
    }
})

export default router