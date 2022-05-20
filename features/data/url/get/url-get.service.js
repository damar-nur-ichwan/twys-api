// Libraries
const { status } = require("../../../../configs");
const { getAllUrl } = require("./url-get.access");

// Service logic
const service = async () => {

    // Check User
    let urls = await getAllUrl()

    // If Error
    if(!urls) return {
        status: status["5xx"][500].status,
        message: status["5xx"][500].message
    }

    // Return
    return {
        status: 200,
        message: JSON.stringify(urls)
    }
}

module.exports = service