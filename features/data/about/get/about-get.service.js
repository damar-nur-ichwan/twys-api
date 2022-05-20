// Libraries
const { status } = require("../../../../configs");
const { getAbout } = require("./about-get.access");

// Service logic
const service = async () => {

    // Check User
    let about = await getAbout()

    // If Error
    if(!about) return {
        status: status["5xx"][500].status,
        message: status["5xx"][500].message
    }

    // Return
    return {
        status: 200,
        message: JSON.stringify(about)
    }
}

module.exports = service