// Libraries
const { status } = require("../../../../configs");
const { setAllRatio } = require("./ratio-set.access");

// Service logic
const service = async (ratio ={}) => {

    // Set Data
    const set = await setAllRatio(ratio)

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
        message: "Ratio updated"
    }
}

module.exports = service