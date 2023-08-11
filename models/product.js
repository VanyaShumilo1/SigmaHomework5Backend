import mongoose, {Schema} from "mongoose";

const ProductModel = new Schema({
    title: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String
    },
    discount: {
        type: Boolean,
        required: true
    },
    originalPrice: {
        type: Number,
        required: true,
    },
    discountPrice: {
        type: Number,
    }
}, {timestamps: true})

export default mongoose.model("Product", ProductModel)