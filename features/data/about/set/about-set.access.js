// Libraries
const { firebase, logger } = require('../../../../utils/utils')
const db = firebase.realtime

// Variables
const layer = 'access'

/******************* SET ALL TECHNICAL: to get all technical data *******************/
const setAbout = async (about = {}) => {

    // Variables
    const collection = 'about'
    
    // Set Input
    try{
        await db.ref(collection).set(about)
        return true
    } catch (err){
        logger.error({layer, message: err})
        return false
    }
}


module.exports = {
    setAbout
}