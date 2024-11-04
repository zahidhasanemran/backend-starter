import express from 'express'
import {
  forgotPassController,
  loginController,
  logoutController,
  SignupController,
  verifyEmailController,
  resetPassController,
} from '../controllers/auth.controller.js'

const router = express.Router()

router.post('/signup', SignupController)

router.post('/login', loginController)

router.post('/logout', logoutController)

router.post('/forgot-password', forgotPassController)
router.post('/reset-password/:token', resetPassController)
router.post('/verify-email', verifyEmailController)

export default router
