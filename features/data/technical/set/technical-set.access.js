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
            const timestamp = Object.keys(doc.data)[0]
            const value = doc.data[timestamp]
            try{
                await db.ref(`${collection}/${doc.code}/data/${timestamp}`).set(value)
            } catch(err){
                console.log(err)
            }
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