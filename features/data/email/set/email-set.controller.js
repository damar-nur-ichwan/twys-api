// Libraries
const configs = require('../../../../configs');
const service = require('./email-set.service')
const { verifyToken } = require('../../../../middlewares/middlewares');

// Variables
const featurePath = configs.path.data.email

// Controller
const set = (app = {}) => {
    
    // GET
    app.post(`${featurePath}/sent`, verifyToken, async (req,res) => {
        
        // Variables
        const { emails } = req.body

        // Run service
        const response = await service(emails)

        // Send response
        res.status(response.status).send(response.message)
    })
}

module.exports = { featurePath, set }