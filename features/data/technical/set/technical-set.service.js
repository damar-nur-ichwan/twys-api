// Libraries
const { status } = require("../../../../configs");
const { setAllTechnical } = require("./technical-set.access");

// Service logic
const service = async (technical ={}) => {

    // Set Data
    const set = await setAllTechnical(technical)

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
        message: "Technical updated"
    }
}

module.exports = service