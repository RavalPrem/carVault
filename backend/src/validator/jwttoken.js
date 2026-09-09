const jwt = require('jsonwebtoken')

const tokenGenerator = async(userId) => {
    return jwt.sign(
        {id : userId},
        process.env.JWT_SECRET,
        {expiresIn : "1m"}
    )
}

module.exports = tokenGenerator