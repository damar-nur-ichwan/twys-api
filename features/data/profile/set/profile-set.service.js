// Libraries
const { status } = require("../../../../configs");
const { setAllProfile } = require("./profile-set.access");

// Service logic
const service = async (profile =[]) => {

    // Set Data
    const set = await setAllProfile(profile)

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
        message: "Profiles updated"
    }
}

module.exports = service