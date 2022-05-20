// Libraries
const configs = require('../../../../configs');
const service = require('./history-get.service')
const { verifyToken } = require('../../../../middlewares/middlewares')

// Variables
const featurePath = configs.path.data.history

// Controller
const get = (app = {}) => {

    // GET
    app.get(`${featurePath}/:code`, verifyToken, async (req,res) => {

        // Variable
        const { code } = req.params

        // Run service
        const response = await service(code.toUpperCase())

        // Send response
        res.status(response.status).send(response.message)
    })
}

module.exports = { featurePath, get }