import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from "mongoose";
import multer from "multer";
import productRoutes from "./routes/productRoutes.js";

dotenv.config()
const PORT = process.env.PORT || 5000
const DB_URL = process.env.DB_URL

const app = express()

const storage = multer.diskStorage({
    destination: (_, __, cb) => {
        cb(null, 'uploads')
    },
    filename: (_, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({storage})

app.use(express.json())
app.use(cors())
app.use('/uploads', express.static('uploads'))

app.post('/upload', upload.single('image'), (req, res) => {
    res.json({
        url: `/uploads/${req.file.originalname}`
    })
})

app.use('/products', productRoutes)

const start = async () => {
    try {
        await mongoose.connect(DB_URL).then(() => {
            console.log('\nDB connected')
        })
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`)
        })
    } catch (err) {
        console.log(err)
    }
}

await start()
