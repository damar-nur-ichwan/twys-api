// Libraries
const { status } = require("../../../../configs");
const { setAllSummary } = require("./summary-set.access");

// Service logic
const service = async (summary ={}) => {

    // Set Data
    const set = await setAllSummary(summary)

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
        message: "Summary updated"
    }
}

module.exports = service