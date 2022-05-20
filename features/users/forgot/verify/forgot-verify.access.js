//Libraries
const { firebase, logger, time, timestamp2date } = require('../../../../utils/utils')
const configs = require('../../../../configs')
const model = require('./forgot-verify.model')
const db = firebase.firestore()

// Variables
const layer = 'access'
const featurePath = configs.path.user.forgot.verify


/******************* GET TIME: get time from worldtimeapi *******************/
const getTime = async () => {

    // Define url
    const url = 'http://worldtimeapi.org/api/timezone/asia/jakarta'

    // Get time
    const output = await time(url)

    // Return time
    return output
}


/******************* GET OTP: retrieve existing otp *******************/
const getOTP = async (otp = 0) => {

    // Variable
    const collection = 'otp'
    const document = 'forgot'
    const { date } = await getTime()

    // Try
    try{

        // Get otp
        let response = await db.collection(collection).doc(document).collection(date).where('otp','==',otp).get()
        response = response.docs.map(doc=>doc.data())
        
        // If otp not exist, return
        if (!response.length){
            logger.warn({ layer, message: `OTP not exist` })
            return false
        }

        // If otp exist, delete
        const batch = db.batch()
        db.collection(collection).doc(document).collection(date).where('otp','==',otp).get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                batch.delete(doc.ref);
            });
            batch.commit()
        });

        // Return response
        return response[0]
    }
    
    // Catch
    catch (err){
        
        // Return
        logger.error({ layer, message: err })
        return false
    }
}

/******************* SAVE USER: save new user *******************/
const saveUser = async (user = {}) => {

    // Define path
    const { email } = user
    const collection = 'users'
        
    // Try
    try{

        // Add OTP to database
        await db.collection(collection).doc(email).set(user)

        // Return true
        return true
    } 
    
    // Catch
    catch (err) {

        // Return
        logger.error({ layer, message: err })
        return false
    }
}


/******************* SEND EMAIL: add data to Email Queue *******************/
const sendEmail = async (requested = 0, to = '', subject = '', text = '' ) => {

    //Variables
    const collection = 'email'
    const document = 'queue'
    const date = timestamp2date(requested)
    const path = `${featurePath}-${collection}-${document}`

    // Data validation
    const validation = model(path).validate({ requested, to, subject, text })

    // If the data entered is invalid
    if(!validation){

        // Return
        logger.warn({ layer, message: 'The data entered is invalid' })
        return false
    }

    // Try
    try{

        // Push Email
        await db.collection(collection).doc(document).collection(date)
        .add({ requested, to, subject, text })
    
        //return
        return true
    } 
    
    // Catch
    catch (err){

        // Return
        logger.error({ layer, message: err })
        return false
    }
}


module.exports = {
    getOTP,
    getTime,
    saveUser,
    sendEmail
}