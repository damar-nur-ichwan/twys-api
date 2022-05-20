// Libraries
const configs = require('../../../../configs');
const service = require('./about-set.service')
const { verifyToken } = require('../../../../middlewares/middlewares');

// Variables
const featurePath = configs.path.data.about

// Controller
const set = (app = {}) => {
    
    // GET
    app.post(featurePath, verifyToken, async (req,res) => {

        // Variables
        const { about } = req.body

        // Run service
        const response = await service(about)

        // Send response
        res.status(response.status).send(response.message)
    })
}

module.exports = { featurePath, set }