import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB
    , {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log(`Mongodb connected...`)
  } catch (error) {
    console.log(`Error: ${error.message}`)
  }
}

export default connectDB