import ProductModel from "../models/product.js";

class ProductController {
    async create(req, res) {
        try {
            const product = await ProductModel.create({
                title: req.body.title,
                imageUrl: req.body.imageUrl,
                discount: req.body.discount,
                originalPrice: req.body.originalPrice,
                discountPrice: req.body.discountPrice
            })

            res.status(200).json(product)
        } catch (err) {
            res.status(500).json({
                message: "something went wrong while creating product",
                err
            })
            console.log(err)
        }
    }

    async getAll(req, res) {
        try {
            const products = await ProductModel.find()
            res.status(200).json(products)
        } catch (err) {
            res.status(500).json({
                message: "something went wrong while getting products"
            })
            console.log(err)
        }
    }
}

export default new ProductController