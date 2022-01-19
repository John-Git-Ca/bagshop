import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

const authUser = asyncHandler(async (req, res) => {
  const {email, password} = req.body
  const user = await User.findOne({email: email})
  console.log(user)
  if(user && await user.matchPassword(password)){
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    })
  }
  else{
    res.status(404).json({message:'Invaid email or password'})
    throw new Error('Invaid email or password')
  }
})

const registeruser = asyncHandler(async (req, res) => {
  const {name, email, password} = req.body
  const userExists = await User.findOne({email})
  if(userExists){
    res.status(404).json({message: 'User already exsits'})
  }
  const user = await User.create({
    name,
    email,
    password,
  })
  if(user){
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    })
  }
  else{
    res.status(404).json({mesage: 'Invalid user data'})
    throw new Error('Invalid user data')
  }
})

export {
  authUser,
  registeruser
}