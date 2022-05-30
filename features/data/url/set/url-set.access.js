// Libraries
const { firebase, logger } = require('../../../../utils/utils')
const db = firebase.realtime

// Variables
const layer = 'access'

/******************* SET ALL TECHNICAL: to get all technical data *******************/
const setTrueUrl = async (input = {}) => {

    // Variables
    const collection = 'url'
    
    // Try
    try{
        input.map(async (doc) => { 
            await db.ref(`technical/${doc.code}/`).set({code: doc.code})
            await db.ref(`${collection}/${doc.code}`).set(doc)
        })
        return true
    }
    
    // Catch
    catch (err){
        logger.error({layer, message: err})
        return false
    }
}

const setFalseUrl = async (input = {}) => {

    // Variables
    const collection = 'url'
    
    // Try
    try{
        input.map(async (doc) => {
            await db.ref(`${collection}-false/${doc.code}`).set(doc)
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
    setTrueUrl,
    setFalseUrl
}