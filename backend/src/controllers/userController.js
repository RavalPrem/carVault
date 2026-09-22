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

const updateProfile = async(req,res) => {
    try {
        const {userID} = req.params;

        const {userName,email,password,newPassword,confirmPassword,phoneNumber} = req.body;

        const existUser = await userModel.findById(userID)

        if(!existUser) {
            return res.status(401).json({
                success : false,
                message : "User not found"
            })
        }

        if (!userName || !email || !password || !phoneNumber) {
            return res.status(400).json({
                success: false,
                message: 'PUT requires all fields: userName, email, password, and phoneNumber.',
            });
        }

        const MatchOldPassword = await comparePassword(password,existUser.hashPassword)

        if(!MatchOldPassword) {
            return res.status(401).json({
                success: false,
                message: 'Current password does not match.',
            });
        }

        if (newPassword) {
            if (newPassword !== confirmPassword) {
                return res.status(400).json({
                    success: false,
                    message: 'New password and confirm password do not match.',
                });
            }
            existUser.hashPassword = await hashingPassword(newPassword);
        }

        existUser.userName = userName
        existUser.email = email
        existUser.phoneNumber = phoneNumber

        await existUser.save();

        return res.status(201).json({
            success : true,
            user : {
                name : existUser.userName,
                email : existUser.email,
                phoneNumber : existUser.phoneNumber,
            }
        })


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
    logIn,
    updateProfile
}