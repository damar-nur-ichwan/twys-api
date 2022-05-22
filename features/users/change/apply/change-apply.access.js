// Libraries
const { firebase, logger, time, otp } = require('../../../../utils/utils')
const db = firebase.firestore()
const dbReal = firebase.realtime
const model = require('./change-apply.model')
const configs = require('../../../../configs')

// Variables
const layer = 'access'
const featurePath = configs.path.user.change.apply


/******************* CHECK USER: is user already exist? *******************/
const checkUser = async (email='') => {

    // Variables
    const collection = 'users'

    // Try
    try{

        // Get user
        let user = await db.collection(collection).where('email','==',email).get()
        user = user.docs.map(doc=>doc.data())

        // If user is already exist
        if (user.length === 0){

            // Return false
            logger.warn({layer, message: `User is not exist`})
            return false
        }

        // Return
        return user[0]
    }

    // Catch
    catch (err){

        // Return false
        logger.error({ layer, message: err})
        return false
    }
}


/******************* GET TIME: get time from worldtimeapi *******************/
const getTime = async () => {

    // Define url
    const url = 'http://worldtimeapi.org/api/timezone/asia/jakarta'

    // Get time
    const output = await time(url)

    // Return time
    return output
}


/******************* ADD OTP/REGISTER: save new application register *******************/
const addOtpChange = async (user = {}) => {

    // Variables
    const { otp } = user
    const collection = 'otp'
    const document = 'change'

    // Try
    try{ 
        
        // Add or update OTP Forgot
        await dbReal.ref(`${collection}/${document}/${otp}`).set(user)

        // Return true
        return true
    }
    
    // Catch
    catch (err){

        // Return false
        logger.error({ layer, message: err})
        return false
    }
}


/******************* SEND EMAIL: add data to Email Queue *******************/
const sendEmail = async (requested = 0, to = '', subject = '', text = '') => {

    // Variables
    const collection = 'email'
    const document = 'queue'
    const path = `${featurePath}-${collection}-${document}`

    // Input validation
    const validation = model(path).validate({ requested, to, subject, text })
    
    // If input is invalid
    if(!validation){

        // Return
        logger.warn({ layer, message: 'The data entered is invalid'})
        return false
    }

    // Try
    try{

        // Add data to Email Queue
        await dbReal.ref(`${collection}/${document}/${requested}`)
        .set({ requested, to, subject, text })

        // Return true
        return true
    } 
    
    // Catch
    catch (err){

        // Return false
        logger.error({ layer, message: err})
        return false
    }
}

/******************* DELETE EXPIRED OTP: to delete expired otp *******************/
const liveLimit = 2 * 60 * 1000
setInterval( async () => {

    // Variables
    const collection = 'otp'
    const document = 'change'
    
    // Get Date
    const { timestamp } = await getTime()

    // Expired OTP
    const OTP = otp.generate(timestamp - liveLimit)

    // Try
    try{

        // Expired OTP
        let expOTP = await dbReal.ref(`${collection}/${document}`).orderByKey().endAt(`${OTP}`).once('value')
        expOTP = expOTP.val() ? Object.keys(expOTP.val()) : [];

        // Delete
        expOTP.map(async(otp)=>{
            await dbReal.ref(`${collection}/${document}/${otp}`).remove()
        })

        // Return true
        return true
    }
    
    // Catch
    catch (err){
        
        // Return false
        logger.error({ layer, message: err})
        return false
    }
}, liveLimit)



module.exports = {
    checkUser,
    addOtpChange,
    getTime,
    sendEmail
}