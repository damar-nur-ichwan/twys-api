const model = require('data-model')
const configs = require('../../../../configs')
const featurePath = configs.path.user.register.apply

/******************* CONTROLLER *******************/
model(featurePath).setTemplate({
    email: String,
    password: String,
    role: String,
})

/******************* ACCESS *******************/
model(`${featurePath}-users`).setTemplate(String)

model(`${featurePath}-otp-register`).setTemplate({
    requested: Number,
    email: String,
    password: String,
    role: String,
    otp: Number
})

model(`${featurePath}-email-queue`).setTemplate({
    requested: Number,
    to: String,
    subject: String,
    text: String
})

module.exports = model