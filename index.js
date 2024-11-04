import express from 'express'
import dotenv from 'dotenv'

import authRouter from './routes/auth.routes.js'
import userRouter from './routes/user.routes.js'
import { connectDB } from './libs/db.js'

const PORT = process.env.PORT || 5000

const app = express()
dotenv.config()

app.get('/', (req, res) => {
  res.send('Hello from Home page')
})

// allow us to extract parameters form req.body
app.use(express.json())

app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)

app.listen(PORT, () => {
  connectDB()
  // console.log('Hello form server')
})
