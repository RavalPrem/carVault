const express = require('express')

const userRoute = express.Router()

//validate error
const {
    SignupvalidateErrors,
    loginValidationError
} = require('../middlewares/userMiddleware')

//userController
const {
    signUp,
    logIn,
    updateProfile
}
 = require('../controllers/userController')

userRoute.get('/',(req,res) => {
    res.send('hello')
})

userRoute.post('/signUp',SignupvalidateErrors,signUp)
userRoute.post('/logIn',loginValidationError,logIn)

userRoute.put('/user/:userID',updateProfile)

module.exports = userRoute