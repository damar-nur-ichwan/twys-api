// Libraries
const configs = require('../../../../configs');
const service = require('./summary-set.service')
const { verifyToken } = require('../../../../middlewares/middlewares');

// Variables
const featurePath = configs.path.data.summary

// Controller
const set = (app = {}) => {
    
    // GET
    app.post(featurePath, verifyToken, async (req,res) => {

        // Variables
        const { summary } = req.body

        // Run service
        const response = await service(summary)

        // Send response
        res.status(response.status).send(response.message)
    })
}

module.exports = { featurePath, set }