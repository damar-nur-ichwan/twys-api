// Libraries
const { status } = require("../../../../configs");
const { setAllDividend } = require("./dividend-set.access");

// Service logic
const service = async (dividend ={}) => {

    // Set Data
    const set = await setAllDividend(dividend)

    // If Failed, return
    if(!set) {
        return {
            status: status["5xx"][500].status,
            message: status["5xx"][500].message
        }
    }

    // Return
    return {
        status: 200,
        message: "Dividend updated"
    }
}

module.exports = service