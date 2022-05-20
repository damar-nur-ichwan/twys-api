// Libraries
const { firebase, logger } = require('../../../../utils/utils')
const db = firebase.realtime

// Variables
const layer = 'access'

/******************* SET ALL TECHNICAL: to get all technical data *******************/
const setAllHistory = async (input = {}) => {

    // Variables
    const collection = 'history'
    let data = {}
    
    // Try
    try{
        input.map((doc) => { 
            data[doc.code] = doc
        })

        // Set Group
        await db.ref(collection).set(data)
        return true
    } 
    
    // Catch
    catch (err){
        logger.error({layer, message: err})
        return false
    }
}


module.exports = {
    setAllHistory
}