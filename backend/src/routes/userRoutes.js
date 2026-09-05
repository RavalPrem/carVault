const express = require('express')

const route = express.Router()

//validate error
const validateErrors = require('../middlewares/userMiddleware')

//userController
const signUp = require('../controllers/userController')

route.get('/',(req,res) => {
    res.send('hello')
})

route.post('/signUp',validateErrors,signUp)

module.exports = route