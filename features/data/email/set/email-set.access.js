// Libraries
const { firebase, logger } = require('../../../../utils/utils')
const db = firebase.realtime

// Variables
const layer = 'access'

/******************* SET ALL TECHNICAL: to get all technical data *******************/
const setSentEmail = async (input = []) => {

    // Variables
    const collection1 = 'email/sent'
    const collection2 = 'email/queue'
    
    // Try
    try{
        input.map(async ({requested, to, subject, text}) => { 

            // Set Group
            await db.ref(`${collection1}/${requested}`).set({requested, to, subject, text})
            await db.ref(`${collection2}/${requested}`).remove()
        })
        return true
    } 
    
    // Catch
    catch (err){
        logger.error({layer, message: err})
        return false
    }
}


module.exports = {
    setSentEmail
}