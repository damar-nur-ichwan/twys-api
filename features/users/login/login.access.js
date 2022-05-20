// Libraries
const { firebase, logger, time, timestamp2date } = require('../../../utils/utils')
const db = firebase.firestore()
const model = require('./login.model')
const configs = require('../../../configs')

// Variables
const layer = 'access'
const featurePath = configs.path.user.register.apply

/******************* CHECK USER: is user already exist? *******************/
const checkUser = async (email='', password='') => {

    // Variables
    const collection = 'users' 

    // Try
    try{

        // Get user
        let user = await db.collection(collection).where('email','==',email).get()
        user = user.docs.map(doc=>doc.data())

        // If user is already exist
        if (user.length === 0 || (user.length > 0 && user[0].password !== password)){

            // Return true
            logger.warn({layer, message: `Account is not exist`})
            return false
        }

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
const logedIn = async (user = {}) => {

    // Variables
    const { email } = user
    const collection = 'users'

    // Try  
    try{

        // Add or update OTP Register 
        await db.collection(collection).doc(email).set(user)

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

    // Add data to Email Queue
    try{
        await db.collection(collection).doc(document).collection(date)
        .add({ requested, to, subject, text })
    
        // Return true
        return true
    } catch (err){

        // Return false
        logger.error({ layer, message: err})
        return false
    }
}


module.exports = {
    checkUser,
    logedIn,
    getTime,
    sendEmail
}