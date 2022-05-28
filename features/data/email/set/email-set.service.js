// Libraries
const { status } = require("../../../../configs");
const { setSentEmail } = require("./email-set.access");

// Service logic
const service = async (emails =[]) => {

    // Set Data
    const set = await setSentEmail(emails)

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
        message: "Sent email updated"
    }
}

module.exports = service