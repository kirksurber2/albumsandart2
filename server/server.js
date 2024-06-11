const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
require('dotenv').config()
const {expressjwt} = require('express-jwt')
const { MessagingResponse } = require('twilio').twiml;
const cors = require('cors')


//Middleware


app.use(express.json())
app.use(morgan('dev'))
app.use(
    cors({
      origin: ["https:localhost:9000/", 'https://albumsandart.com/'],
      methods: ["GET", "POST", "PUT","DELETE"],
      credentials: true,
      origin: true,
    })
  );


// CONNECT TO DB
async function connectToDB () {
 try {
    await mongoose.connect(process.env.MONGODBTEST)
    console.log("Connected to MongoDB")
 } catch (error) {
    console.log(error)    
 }
}
connectToDB();

//Routes

app.use('/stay-up-to-date', require("./Routes/leadsRouter.js"))
app.use('/auth', require('./Routes/authRouter.jsx'))
app.use('/marketing', require('./Routes/marketingRouter.js'))
//Routes Here for testing ONLY *** to me moved into Protected Once working ***

//Protected Routes
app.use('/api', expressjwt({secret: process.env.SECRET, algorithms: ['HS256']})) // req.user
app.use('/api/:company_id', require('./Routes/companyRouter.js'))

{/* 

app.use('/api/:company', require('./routes/companyRouter.js'))
app.use('/users', require('./backend/Routes/userRouter.js'))

app.use('/api/:company/companyPackages', require('./backend/Routes/companyPackagesRouter.js'))
app.use('/api/:company/orders', require('./backend/Routes/ordersRouter.js'))
app.use('/api/:compnay/products', require('./backend/Routes/productsRouter.js'))
app.use('/api/:company/productPricing', require('./backend/Routes/productPricingRouter.js'))
app.use('/api/:company/sessions', require('./backend/Routes/sessionsRouter.js'))

*/}

//Error handler


app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

// Server Listen
app.listen(9000, () => {
    console.log('the server is running on 9000')
});