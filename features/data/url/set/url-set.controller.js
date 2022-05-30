// Libraries
const configs = require('../../../../configs');
const service = require('./url-set.service')
const { verifyToken } = require('../../../../middlewares/middlewares');

// Variables
const featurePath = configs.path.data.url

// Controller
const set = (app = {}) => {
    
    // GET
    app.post(featurePath, verifyToken, async (req,res) => {

        // Variables
        const { url } = req.body

        // Run service
        const response = await service(url, true)

        // Send response
        res.status(response.status).send(response.message)
    })

    app.post(featurePath+'/false', verifyToken, async (req,res) => {

        // Variables
        const { url } = req.body

        // Run service
        const response = await service(url,false)

        // Send response
        res.status(response.status).send(response.message)
    })
}

module.exports = { featurePath, set }