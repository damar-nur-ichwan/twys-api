// Libraries
const configs = require('../../../../configs');
const service = require('./register-apply.service')
const model = require('./register-apply.model');
const { logger } = require('../../../../utils/utils');

// Variables
const layer = 'controller'
const featurePath = configs.path.user.register.apply

// Controller
const apply = (app = {}) => {

    // POST
    app.post(featurePath, async (req,res) => {
        
        // Input validation
        const { email, password, role } = req.body
        const validation = model(featurePath).validate({ email, password, role })

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
        const response = await service(email, password, role)

        // Send response
        res.status(response.status).send(response.message)
    })
}

module.exports = { featurePath, apply }