const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000
const cors = require('cors')



require('dotenv').config()
app.use(express.json())
app.use(cors())
app.use(cookieParser())


mongoose.connect(process.env.DB_CONNECT, {useUnifiedTopology: true, useNewUrlParser: true})

mongoose.connection.on('connected', () =>{
  console.log('MongoDB Is Connected')
})

const userRouter = require('./routes/user.routes')
app.use('/user', userRouter)

app.listen(PORT, () => {
  console.log(`express running on PORT: ${PORT}`)
})