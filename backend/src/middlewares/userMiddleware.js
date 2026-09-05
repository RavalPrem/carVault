const Joi = require("joi");
//user model
const userModel = require("../models/userModel");

const validateErrors = async (req, res, next) => {
  const Schema = await Joi.object({
    userName: Joi.string().min(3).max(30).required().messages({
      "string.min": "userName must be atleast 3 character long",
      "string.max": "please shorten your entered name",
      "any.required": "userName is required",
    }),

    hashPassword: Joi.string().min(5).required().messages({
      "string.min": "password should atleast 5 character long",
      "any.required": "Password is required",
    }),

    email: Joi.string().email().required().messages({
      email: "it must be email",
      "any.required": "email is required",
    }),

    phoneNumber: Joi.number()
      .min(1000000000)
      .max(9999999999)
      .required()
      .messages({
        "number.base": "Phone number must be a number",
        "number.min": "Phone number must be at least 10 digits",
        "number.max": "Phone number cannot exceed 10 digits",
        "any.required": "Enter phone number",
      }),
  });

  const { error } = Schema.validate(req.body);

  if (error) {
    const errorMessage = error.details[0].message;

    return res.status(400).json({
      success: false,
      message: errorMessage,
    });
  }

  next();
};

module.exports = validateErrors;
