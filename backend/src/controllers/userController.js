const userModel = require('../models/userModel')

//hash password code
const {
    comparePassword,
    hashingPassword
}
= require('../validator/hashPassword')
 
const signUp = async(req,res,next) => {
    try {
        const {userName, hashPassword, email,phoneNumber} = req.body

        const existingUser = await userModel.findOne({email})

        if(existingUser) {
            return res.status(401).json({
                success : false,
                message : "user already exist, please log in"
            })
        }

        const hashedPassword = await hashingPassword(hashPassword)

        const user = await userModel.create({
            userName,
            email,
            phoneNumber,
            hashPassword : hashedPassword
        })

        console.log(req.body)

        return res.status(201).json({
            success : true,
            message : "successfully signup",
            user : {
                id : user._id,
                name : user.userName
            }
        })

    } catch (error) {
        res.status(500).json({
            success : false,
            message : error.message
        })
    }
}

module.exports = signUp