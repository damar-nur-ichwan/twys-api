// Libraries
const { status } = require("../../../../configs");
const { setAbout } = require("./about-set.access");

// Service logic
const service = async (about ={}) => {

    // Set Data
    const set = await setAbout(about)
    
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
        message: "About updated"
    }
}

module.exports = service