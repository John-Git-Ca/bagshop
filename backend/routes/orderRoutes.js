import express from 'express'
import {
  addOrderItems,
} from '../controllers/orderController.js'

const router = express.Router()

router.route('/').post(addOrderItems)

export default router