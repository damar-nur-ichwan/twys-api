// Libraries
const { firebase, logger } = require('../../../../utils/utils')
const db = firebase.realtime

// Variables
const layer = 'access'

/******************* GET ALL TECHNICAL: to get all technical data *******************/
const getAllUrl = async () => {
    
    // Collection
    const collection = 'url'

    // Try
    try{

        // Get user
        let snapshot = await db.ref(collection).once('value')
        snapshot = snapshot.val()

        // Return
        return snapshot
    }

    // Catch
    catch (err){

        // Return false
        logger.error({ layer, message: err})
        return false
    }
}

module.exports = {
    getAllUrl
}