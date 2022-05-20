// Libraries
const { status } = require("../../../../configs");
const { getProfile } = require("./profile-get.access");

// Service logic
const service = async (code = '') => {

    // Check User
    let profile = await getProfile(code)

    // If Error
    if(!profile) return {
        status: status["5xx"][500].status,
        message: status["5xx"][500].message
    }

    // Return
    return {
        status: 200,
        message: JSON.stringify(profile)
    }
}

module.exports = service