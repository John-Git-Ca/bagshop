import asyncHandler from 'express-async-handler'
import Order from '../models/orderModel.js'

const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    totalPrice,
  } = req.body

  if(orderItems && orderItems === 0){
    res.status(404).send('No order items')
    throw new Error('No order items')
  }
  else {
    const order = new Order({
      orderItems,
      shippingAddress,
      paymentMethod,
      totalPrice,
    })
    const createdOrder = await order.save()
    res.status(201).json(createdOrder)
  }

})

export {
  addOrderItems,
}