const model = require('data-model')
const configs = require('../../../../configs')
const featurePath = configs.path.user.forgot.verify

/******************* CONTROLLER *******************/
model(featurePath).setTemplate(Number)

/******************* ACCESS *******************/
model(`${featurePath}-email-queue`).setTemplate({
    requested: Number,
    to: String,
    subject: String,
    text: String
})
module.exports = model