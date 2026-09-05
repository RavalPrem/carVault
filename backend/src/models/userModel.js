const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, "userName required for using website"],
        minlength: [2, "name must be atleast 2 character long"],
        maxlength: [30, "name must be under 30 characters"],
    },

    hashPassword: {
        type: String,
        required: [true, "password is required"],
    },

    phoneNumber : {
        type : Number,
        unique : true,
        required : [true,'phone number is required for verification']
    },

    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address"],
    },

    profileImage: {
        type: String,
        default: "",
    },

    isEmailVerified: {
        type: Boolean,
        default: false,
    },

    isPhoneVerified: {
        type: Boolean,
        default: false,
    }
});

const userModel = mongoose.model('User',userSchema);

module.exports = userModel
