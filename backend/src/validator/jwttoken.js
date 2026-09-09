const jwt = require('jsonwebtoken')

const tokenGenerator = async(req,res) => {
    return jwt.sign(
        {id : User.id},
        process.env.JWT_SECRET,
        {expiresIn : "1m"}
    )
}

module.exports = tokenGenerator