// Libraries
const { status } = require("../../../../configs");
const { getAllTechnical } = require("./technical-get.access");

// Service logic
const service = async () => {

    // Check User
    let technicals = await getAllTechnical()

    // If Error
    if(!technicals) return {
        status: status["5xx"][500].status,
        message: status["5xx"][500].message
    }

    // Return
    return {
        status: 200,
        message: JSON.stringify(technicals)
    }
}

module.exports = service