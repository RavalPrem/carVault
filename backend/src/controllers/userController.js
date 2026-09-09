const userModel = require('../models/userModel')

//hash password code
const {
    comparePassword,
    hashingPassword
}
= require('../validator/hashPassword')

//token generator
const tokenGenerator = require('../validator/jwttoken')
 
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
        
        const token = await tokenGenerator(user._id);

        return res.status(201).json({
            success : true,
            message : "successfully signup",
            token,
            user : {
                id : user._id,
                name : user.userName
            }
        })

    } catch (error) {
        console.error('the error ', error)

        res.status(500).json({
            success : false,
            message : error.message
        })
    }
}

const logIn = async(req,res,next) => {
    try {
        const {email, password} = req.body

        //check if email is there or not

        const userExist = await userModel.findOne({email});

        if(!userExist) {
            return res.status(404).json({
                success : false,
                message : "User not found please signup first"
            })
        }

        const match = await comparePassword(password,userExist.hashPassword)

        if(!match) {
            return res.status(404).json({
                success : false,
                message : "Password doesn't match retry it"
            })
        }

        const token = await tokenGenerator(userModel._id)

        return res.status(201).json({
            success : true,
            message : "successfully login",
            id : userExist._id,
            token,
            user : {
                username : userExist.userName,
                email : userExist.email 
            }
        })

        //comparing the password
    } catch (error) {
        console.error('the error',error)

        res.status(500).json({
            success : false,
            message : error.message
        })
    }
}

module.exports = {
    signUp,
    logIn
}