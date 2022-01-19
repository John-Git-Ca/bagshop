import express from 'express'
const router = express.Router()

import {
  authUser,
  registeruser,
} from '../controllers/userController.js'

router.route('/login').post(authUser)
router.route('/register').post(registeruser)

export default router