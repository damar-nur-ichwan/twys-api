// Libraries
const { logedIn, checkUser, getTime, sendEmail } = require("./login.access");
const { status, publicKey } = require('../../../configs')
const { logger } = require("../../../utils/utils");
const jwt = require('jsonwebtoken')

// Variables
const layer = 'service'

// Service logic
const service = async (email = '', password = '') => {

    // Check User
    let user = await checkUser(email, password)

    // If user is not exist
    if(!user){

        // Return: 404
        logger.warn({ layer, message: 'Account is not exist' })
        return status["4xx"][404]
    }

    // Generate token
    const token = jwt.sign({ _email: email }, publicKey)

    // Get time
    let { timestamp, datetime } = await getTime()

    // Update Last Login Description
    user['logedIn'] = timestamp
    logedIn(user)

    // Send Email
    const subject = 'TWYS: Login Success'
    const text = `Your login has just been successful on ${datetime}---Enjoy! :)-TWYS `
    const send = sendEmail(timestamp, email, subject, text)

    // Is send email failed
    if(!send){
        logger.warn({layer, message: 'Send email failed'})
        return status["5xx"][500]
    }

    // Return
    return {
        token,
        status: 200,
        message: 'Login success'
    }
}

module.exports = service