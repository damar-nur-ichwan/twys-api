// Libraries
const { firebase, logger } = require('../../../../utils/utils')
const db = firebase.realtime

// Variables
const layer = 'access'

/******************* SET ALL TECHNICAL: to get all technical data *******************/
const setAllTechnical = async (input = {}) => {

    // Variables
    const collection = 'technical'
    
    // Try
    try{
        input.map(async ({code, data}) => { 

            // Variables
            const timestamp = Object.keys(data)[0]
            const value = data[timestamp]

            // Set Group
            await db.ref(`${collection}/${code}/data/${timestamp}`).set(value)
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
    setAllTechnical
}