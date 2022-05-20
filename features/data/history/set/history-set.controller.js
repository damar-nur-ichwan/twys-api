// Libraries
const configs = require('../../../../configs');
const service = require('./history-set.service')
const { verifyToken } = require('../../../../middlewares/middlewares');

// Variables
const featurePath = configs.path.data.history

// Controller
const set = (app = {}) => {
    
    // GET
    app.post(featurePath, verifyToken, async (req,res) => {

        // Variables
        const { history } = req.body

        // Run service
        const response = await service(history)

        // Send response
        res.status(response.status).send(response.message)
    })
}

module.exports = { featurePath, set }