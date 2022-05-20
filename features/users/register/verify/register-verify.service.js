const { status } = require("../../../../configs");
const { logger } = require("../../../../utils/utils");
const { getOTP, getTime, saveUser, sendEmail } = require('./register-verify.access')

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
    const { email, password, role } = user
    const save = saveUser(timestamp, email, password, role)

    // If save user failed
    if(!save){
        logger.warn({layer, message: 'Save user failed'})
        return status["5xx"][500]
    }

    // Send Email
    const subject = 'TWYS: Registration Success'
    const text = `Congratulation! Your account was registered,--Now you can login in the TWYS by entering your email and password.--We hope you find what you want in our services.---Enjoy! :)-TWYS `
    const send = sendEmail(timestamp, email, subject, text)

    // Is send email failed
    if(!send){
        logger.warn({layer, message: 'Send email failed'})
        return status["5xx"][500]
    }

    // Return
    return {
        status: 200,
        message: 'Congratulation! Your account was registered'
    
    }
}

module.exports = service