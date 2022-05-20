// Libraries
const configs = require('../../../../configs');
const service = require('./url-get.service')
const { verifyToken } = require('../../../../middlewares/middlewares')

// Variables
const featurePath = configs.path.data.url

// Controller
const get = (app = {}) => {

    // GET
    app.get(`${featurePath}`, verifyToken, async (req,res) => {

        // Run service
        const response = await service()

        // Send response
        res.status(response.status).send(response.message)
    })
}

module.exports = { featurePath, get }