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
        Object.values(input).map(async (doc) => { 
            // Set
            const timestamp = Object.keys(doc.data)
            const value = doc.data[timestamp]
            await db.ref(`${collection}/${doc.code}/data/${timestamp}`).set(value)
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