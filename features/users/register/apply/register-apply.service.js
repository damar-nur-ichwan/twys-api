// Libraries
const { checkUser, getTime, addOtpRegister, sendEmail } = require("./register-apply.access");
const { status } = require('../../../../configs')
const { logger, otp } = require("../../../../utils/utils");

// Variables
const layer = 'service'

// Service logic
const service = async (email = '', password = '', role = '') => {

    // Check User
    const user = await checkUser(email)

    // If user is already exist
    if(!user){

        // Return: 409
        logger.warn({ layer, message: 'Account is already exist' })
        return status["4xx"][409]
    }

    // Get time
    const { timestamp } = await getTime()

    // Generate OTP
    const OTP = otp.generate(timestamp)

    // Add data to OTP Register
    const addOTP = addOtpRegister(timestamp, email, password, role, OTP) 

    // If push OTP failed
    if(!addOTP){

        // Return 500
        logger.warn({ layer, message: 'Add OTP failed', })
        return status["5xx"][500]
    }
    
    // Send Email
    const subject = `TWYS: Register Verification`
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