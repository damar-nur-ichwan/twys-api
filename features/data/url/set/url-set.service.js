// Libraries
const { status } = require("../../../../configs");
const { setAllUrl } = require("./url-set.access");

// Service logic
const service = async (url ={}) => {

    // Set Data
    const set = await setAllUrl(url)

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
        message: "Url updated"
    }
}

module.exports = service