const bcrypt = require('bcrypt')

const hashingPassword = async (hashpassword) => {
    const finalHashPassword = await bcrypt.hash(hashpassword, 10)
    return finalHashPassword
}

const comparePassword = async(password, hashPassword) => {
    const match = await bcrypt.compare(password, hashPassword);
    return match
}

module.exports = {
    hashingPassword,
    comparePassword
}