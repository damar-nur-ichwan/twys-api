// Libraries
const configs = require('../../../../configs');
const service = require('./technical-set.service')
const { verifyToken } = require('../../../../middlewares/middlewares');

// Variables
const featurePath = configs.path.data.technical

// Controller
const set = (app = {}) => {
    
    // GET
    app.post(featurePath, verifyToken, async (req,res) => {

        // Variables
        const { technical } = req.body

        // Run service
        const response = await service(technical)

        // Send response
        res.status(response.status).send(response.message)
    })
}

module.exports = { featurePath, set }