import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'

dotenv.config()
connectDB()
const app = express()

app.use(express.json())

app.use('/products', productRoutes)
app.use('/users', userRoutes)
app.use('/order', orderRoutes)

const PORT = process.env.PORT

app.listen(PORT, console.log(`Server running on port ${PORT}`))