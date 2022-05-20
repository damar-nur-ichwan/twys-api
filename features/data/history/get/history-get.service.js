// Libraries
const { status } = require("../../../../configs");
const { getHistory } = require("./history-get.access");

// Service logic
const service = async (code = '') => {

    // Check User
    let history = await getHistory(code)

    // If Error
    if(!history) return {
        status: status["5xx"][500].status,
        message: status["5xx"][500].message
    }

    // Return
    return {
        status: 200,
        message: JSON.stringify(history)
    }
}

module.exports = service