// Libraries
const { checkUser, getTime, addOtpChange, sendEmail } = require("./change-apply.access");
const { status } = require('../../../../configs')
const { logger, otp } = require("../../../../utils/utils");

// Variables
const layer = 'service'

// Service logic
const service = async (email = '', password = '') => {

    // Check User
    let user = await checkUser(email)

    // If user is already exist
    if(!user){

        // Return: 409
        logger.warn({ layer, message: 'Account is not exist' })
        return status["4xx"][404]
    }

    // Get time
    let { timestamp } = await getTime()

    // Generate OTP
    const OTP = otp.generate(timestamp)

    // Add data to OTP Register
    user['requested'] = timestamp
    user['password'] = password
    user['otp'] = OTP
    addOtpChange(user) 
    
    // Send Email
    const subject = `TWYS: Change Password Verification`
    const text = `Hi!--Your verification code is :${OTP}---Insert the code to TWYS app immediately as it will automatically expire in 2 minutes if not used.---If this code does not work, please click the “Resend” button on the app.---Thank you,-TWYS`
    const send = sendEmail(timestamp, email, subject, text)

    // If send email failed
    if(!send){
        
        // Return
        logger.warn({ layer, message: 'Send email failed' })
        return status["5xx"][500]
    }

    // Return
    return {
        status: 200,
        message: 'Please open your email for verification'
    }
}

module.exports = service