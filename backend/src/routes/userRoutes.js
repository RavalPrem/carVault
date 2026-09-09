const express = require('express')

const userRoute = express.Router()

//validate error
const validateErrors = require('../middlewares/userMiddleware')

//userController
const {
    signUp,
    logIn
}
 = require('../controllers/userController')

userRoute.get('/',(req,res) => {
    res.send('hello')
})

userRoute.post('/signUp',validateErrors,signUp)
userRoute.post('/logIn',logIn)

module.exports = userRoute