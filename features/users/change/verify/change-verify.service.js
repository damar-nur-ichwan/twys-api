const { status } = require("../../../../configs");
const { logger } = require("../../../../utils/utils");
const { getOTP, saveUser, getTime, sendEmail } = require('./change-verify.access')

// Variables
const layer = 'service'

const service = async (otp = 0) => {
    
    // Get OTP data
    const user = await getOTP(otp)

    // If OTP not exist
    if(!user){

        // Return
        logger.warn({layer, message: 'OTP data not exist'})
        return status["4xx"][400]
    }

    // Get time
    const { timestamp } = await getTime()

    // Save user
    delete user['requested']
    delete user['otp']
    user['updated'] = timestamp
    saveUser(user)

    // Send Email
    const { email } = user
    const subject = 'TWYS: Change Password Success'
    const text = `Congratulation! Your password changed,--Now you can login in the TWYS by entering your email and new password.--We hope you find what you want in our services.---Enjoy! :)-TWYS `
    const send = sendEmail(timestamp, email, subject, text)

    // Is send email failed
    if(!send){
        logger.warn({layer, message: 'Send email failed'})
        return status["5xx"][500]
    }

    // Return
    return {
        status: 200,
        message: 'Congratulation! Your password changed'
    
    }
}

module.exports = service