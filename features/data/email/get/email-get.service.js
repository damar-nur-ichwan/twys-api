// Libraries
const { status } = require("../../../../configs");
const { getEmailQueue } = require("./email-get.access");

// Service logic
const service = async () => {

    // Check User
    let emailQueue = await getEmailQueue()

    // If Error
    if(!emailQueue) return {
        status: status["5xx"][500].status,
        message: status["5xx"][500].message
    }

    // Return
    return {
        status: 200,
        message: JSON.stringify(emailQueue)
    }
}

module.exports = service