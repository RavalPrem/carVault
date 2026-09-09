const express = require('express')
const cors = require('cors')
const app = express()

//dotenv for env files code running thing

const dotenv = require('dotenv')
dotenv.config()

//database connection
const connectDB = require('./src/config/connection')
connectDB()

//cloudinary connect
const connectCloudinary = require('./src/config/cloudinary')
connectCloudinary()

app.use(express.json())
app.use(cors())

PORT = process.env.PORT || 5050

app.get('/',(req,res) => {
    res.send('Hello')
})

//user Route
const userRoute = require('./src/routes/userRoutes')
app.use('/carVault',userRoute)


app.listen(PORT,() => {
    console.log(`server started on port ${PORT}`)
})