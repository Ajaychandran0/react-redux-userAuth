const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const {errorHandler} = require('./middleware/errorMiddleware')

const connectDB = require('./config/db')
connectDB()

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

const app = express()

app.use(cors(corsOptions)) // Use this after the variable declaration
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/users', require('./routes/routes'))

app.use(errorHandler)

app.listen(port, ()=> console.log(`server started on port ${port}`))