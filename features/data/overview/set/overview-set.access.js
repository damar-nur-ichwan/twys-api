// Libraries
const { firebase, logger } = require('../../../../utils/utils')
const db = firebase.realtime

// Variables
const layer = 'access'

/******************* SET ALL TECHNICAL: to get all technical data *******************/
const setAllOverview = async (input = []) => {

    // Variables
    const collection = 'overview'
    
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
    setAllOverview
}