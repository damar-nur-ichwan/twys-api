const features = require('./features/features.controller');
const configs = require('./configs');
const express = require('express');
const app = express()

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// parse application/json
app.use(express.json())

//run app on feature
features(app)

//run server
app.listen(configs.port,()=>{
    console.info(`API running on port ${configs.port}`)
})

module.exports = app