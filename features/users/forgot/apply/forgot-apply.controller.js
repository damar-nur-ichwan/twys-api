// Libraries
const configs = require('../../../../configs');
const service = require('./forgot-apply.service')
const model = require('./forgot-apply.model');
const { logger } = require('../../../../utils/utils');

// Variables
const layer = 'controller'
const featurePath = configs.path.user.forgot.apply

// Controller
const apply = (app = {}) => {

    // POST
    app.post(featurePath, async (req,res) => {
        
        // Input validation
        const { email, password } = req.body
        const validation = model(featurePath).validate({ email, password })

        // If the data entered is invalid
        if(!validation){
            logger.error({
                layer,
                message: 'Send response: '+configs.status['4xx'][400].message,
                method: req.method,
                url: req.originalUrl,
                status: configs.status['4xx'][400].status
            })

            // Send response
            return res.status(configs.status['4xx'][400].status)
            .send(configs.status['4xx'][400].message)
        }

        // Run service
        const response = await service(email, password)

        // Send response
        res.status(response.status).send(response.message)
    })
}

module.exports = { featurePath, apply }