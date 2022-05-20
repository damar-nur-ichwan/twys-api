// Libraries
const { status } = require("../../../../configs");
const { getFinancial } = require("./financial-get.access");

// Service logic
const service = async (code = '') => {

    // Check User
    let financial = await getFinancial(code)

    // If Error
    if(!financial) return {
        status: status["5xx"][500].status,
        message: status["5xx"][500].message
    }

    // Return
    return {
        status: 200,
        message: JSON.stringify(financial)
    }
}

module.exports = service