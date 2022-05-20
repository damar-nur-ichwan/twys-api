// Libraries
const { firebase, logger, time, timestamp2date } = require('../../../../utils/utils')
const db = firebase.firestore()
const model = require('./register-apply.model')
const configs = require('../../../../configs')

// Variables
const layer = 'access'
const featurePath = configs.path.user.register.apply

/******************* CHECK USER: is user already exist? *******************/
const checkUser = async (email='') => {

    // Variables
    const collection = 'users'
    const path = `${featurePath}-${collection}`

    // Input validation
    const validation = model(path).validate(email)

    // If the input is invalid
    if(!validation){
        
        // Return false
        logger.warn({layer, message: 'The otp entered is invalid'})
        return false
    } 

    // Try
    try{

        // Get user
        let user = await db.collection(collection).where('email','==',email).get()
        user = user.docs.map(doc=>doc.data())

        // If user is already exist
        if (user.length > 0){

            // Return true
            logger.warn({layer, message: `Account is already exist`})
            return false
        }

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
const addOtpRegister = async (requested = 0, email = '', password = '', role = '', otp = 0) => {

    // Variables
    const collection = 'otp'
    const document = 'register'
    const path = `${featurePath}-${collection}-${document}`
    const date = timestamp2date(requested)

    // Input validation
    const validation = model(path).validate({ requested, email, password, role, otp})

    // If Input is invalid
    if(!validation){

        // Return false
        logger.warn({ layer, message: 'The data entered is invalid'})
        return false
    }

    // Try 
    try{

        // Add or update OTP Register 
        await db.collection(collection).doc(document).collection(date).doc(email)
        .set({ requested, email, password, role, otp })

        // Return
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
    const date = timestamp2date(requested)
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
        await db.collection(collection).doc(document).collection(date)
        .add({ requested, to, subject, text })
    
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


setInterval( async () => {

    // Variables
    const collection = 'otp'
    const document = 'register'
    const liveLimit = 2 * 60 * 1000
    // Get Date
    const { date, timestamp } = await getTime()

    // Try
    try{

        // Delete expired OTP
        const batch = db.batch()
        db.collection(collection).doc(document).collection(date).where('requested','<', timestamp - liveLimit).get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                batch.delete(doc.ref);
            });
            batch.commit()
        });

        // Return true
        return true
    } 
    
    // Catch
    catch (err){

        // Return false
        logger.error({ layer, message: err})
        return false
    }

}, 1000 * 60 * 2)


module.exports = {
    checkUser,
    addOtpRegister,
    getTime,
    sendEmail
}