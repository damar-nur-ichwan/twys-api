// Libraries
const { firebase, logger } = require('../../../../utils/utils')
const db = firebase.realtime

// Variables
const layer = 'access'

/******************* SET ALL TECHNICAL: to get all technical data *******************/
const setAllHistory = async (input = []) => {

    // Variables
    const collection = 'history'
    
    // Try
    try{
        input.map(async ({code, data}) => { 

            // Set Group
            if(data) await db.ref(`${collection}/${code}`).set(data)
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
    setAllHistory
}