// Libraries
const configs = require('../../../../configs');
const service = require('./ratio-set.service')
const { verifyToken } = require('../../../../middlewares/middlewares');

// Variables
const featurePath = configs.path.data.ratio

// Controller
const set = (app = {}) => {
    
    // GET
    app.post(featurePath, verifyToken, async (req,res) => {

        // Variables
        const { ratio } = req.body

        // Run service
        const response = await service(ratio)

        // Send response
        res.status(response.status).send(response.message)
    })
}

module.exports = { featurePath, set }