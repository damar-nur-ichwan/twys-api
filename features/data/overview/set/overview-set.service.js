// Libraries
const { status } = require("../../../../configs");
const { setAllOverview } = require("./overview-set.access");

// Service logic
const service = async (overview ={}) => {

    // Set Data
    const set = await setAllOverview(overview)

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
        message: "Overview updated"
    }
}

module.exports = service