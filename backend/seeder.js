import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Product from './models/productModel.js'
import User from './models/userModel.js'
import xlsx from 'xlsx'
import connectDB from './config/db.js'
import users from './data/users.js'

dotenv.config()

connectDB()

let products = []

const importFromFile = () => {
  const spreadsheet = xlsx.readFile('./data/products.xlsx')
  const sheets = spreadsheet.SheetNames
  const sheet = spreadsheet.Sheets[sheets[0]]
  
  for(let i = 2; i < 100; i++){
    const priceNumber = Number(sheet['C'+ i].v) || 1000
    const product = {
      name: sheet['A'+ i].v,
      image: sheet['B'+ i].v,
      price: priceNumber,
      description: sheet['D'+ i].v,
      category: sheet['E'+ i].v,
      brand: 'default brand',
      countInStock: i % 2 === 0 ? 0 : 10,
      rating: 0,
      numReviews: 0,
    }
    if(i < 10) console.log(product)
    products.push(product)
  }
}

const importProduct = async () => {
  try {
    await Product.deleteMany()
    await User.deleteMany()
    importFromFile()

    await Product.insertMany(products)
    await User.insertMany(users)

    console.log('data imported...')

  } catch (error) {
    console.log(`Error: ${error.message}`)
  }
}

importProduct()