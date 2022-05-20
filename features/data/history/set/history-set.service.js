// Libraries
const { status } = require("../../../../configs");
const { setAllHistory } = require("./history-set.access");

// Service logic
const service = async (history ={}) => {

    // Set Data
    const set = await setAllHistory(history)

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
        message: "History updated"
    }
}

module.exports = service