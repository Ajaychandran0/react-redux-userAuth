const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const {errorHandler} = require('./middleware/errorMiddleware')

const connectDB = require('./config/db')
connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/', require('./routes/routes'))

app.use(errorHandler)

app.listen(port, ()=> console.log(`server started on port ${port}`))