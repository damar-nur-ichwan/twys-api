// Libraries
const configs = require('../../../../configs');
const service = require('./profile-set.service')
const { verifyToken } = require('../../../../middlewares/middlewares');

// Variables
const featurePath = configs.path.data.profile

// Controller
const set = (app = {}) => {
    
    // GET
    app.post(featurePath, verifyToken, async (req,res) => {

        // Variables
        const { profile } = req.body

        // Run service
        const response = await service(profile)

        // Send response
        res.status(response.status).send(response.message)
    })
}

module.exports = { featurePath, set }