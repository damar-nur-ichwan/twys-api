// Libraries
const { status } = require("../../../../configs");
const { getOverview } = require("./overview-get.access");

// Service logic
const service = async (code = '') => {

    // Check User
    let overview = await getOverview(code)

    // If Error
    if(!overview) return {
        status: status["5xx"][500].status,
        message: status["5xx"][500].message
    }

    // Return
    return {
        status: 200,
        message: JSON.stringify(overview)
    }
}

module.exports = service