// Libraries
const { firebase, logger } = require('../../../../utils/utils')
const db = firebase.realtime

// Variables
const layer = 'access'

/******************* SET ALL TECHNICAL: to get all technical data *******************/
const setAllDividend = async (input = {}) => {

    // Variables
    const collection = 'financial'
    const sub = 'dividends'
    
    // Try
    try{
        // Get All Financials
        let financials = await db.ref(collection).once('value')
        financials = financials.val()

        // Insert Value
        if(!financials){
            financials = {}
            input.map((doc) => { 
                financials[doc.code] = doc
            })
        } else {
            input.map((doc) => { 
                financials[doc.code][sub] = doc[sub]
            })
        }

        // Set Group
        await db.ref(collection).set(financials)
        return true
    } 
    
    // Catch
    catch (err){
        logger.error({layer, message: err})
        return false
    }
}


module.exports = {
    setAllDividend
}