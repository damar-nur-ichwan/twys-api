// Libraries
const configs = require('../../../../configs');
const service = require('./email-get.service')
const { verifyToken } = require('../../../../middlewares/middlewares')

// Variables
const featurePath = configs.path.data.email

// Controller
const get = (app = {}) => {

    // GET Last Sent
    app.get(`${featurePath}/queue`, verifyToken, async (req,res) => {

        // Run service
        const response = await service()

        // Send response
        res.status(response.status).send(response.message)
    })
}

module.exports = { featurePath, get }