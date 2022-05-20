// Libraries
const configs = require('../../../../configs');
const service = require('./overview-set.service')
const { verifyToken } = require('../../../../middlewares/middlewares');

// Variables
const featurePath = configs.path.data.overview

// Controller
const set = (app = {}) => {
    
    // GET
    app.post(featurePath, verifyToken, async (req,res) => {

        // Variables
        const { overview } = req.body

        // Run service
        const response = await service(overview)

        // Send response
        res.status(response.status).send(response.message)
    })
}

module.exports = { featurePath, set }