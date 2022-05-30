// Libraries
const { status } = require("../../../../configs");
const { setTrueUrl, setFalseUrl } = require("./url-set.access");

// Service logic
const service = async (url ={}, bool = false) => {

    // Set Data
    let set = false
    if(bool) set = await setTrueUrl(url)
    if(!bool) set = await setFalseUrl(url)

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