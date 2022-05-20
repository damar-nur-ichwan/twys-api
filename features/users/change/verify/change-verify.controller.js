// Libraries
const configs = require('../../../../configs');
const service = require('./change-verify.service')
const model = require('./change-verify.model');
const { logger } = require('../../../../utils/utils');

// Variables
const layer = 'controller'
const featurePath = configs.path.user.change.verify

// Controller
const verify = async (app = {}) => {

    // POST
    app.post(featurePath, async (req,res)=>{
        
        // Data validation
        const { otp } = req.body
        const validation = model(featurePath).validate(otp)

        // If the data entered is invalid
        if(!validation){
            logger.error({
                layer,
                message: 'Send response: '+configs.status['4xx'][400].message,
                method: req.method,
                url: req.originalUrl,
                status: configs.status['4xx'][400].status,
            })

            // Send response
            return res.status(configs.status['4xx'][400].status)
            .send(configs.status['4xx'][400].message)
        }

        // Run service
        const response = await service(otp)

        // Send response
        res.status(response.status).send(response.message)
    })

    return app
}


module.exports = { featurePath, verify}