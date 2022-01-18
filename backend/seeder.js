import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Product from './models/productModel.js'
import xlsx from 'xlsx'
import connectDB from './config/db.js'

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
    importFromFile()

    await Product.insertMany(products)

    console.log('data imported...')

  } catch (error) {
    console.log(`Error: ${error.message}`)
  }
}

importProduct()