const { get } = require('./get/financial-get.controller')

function financial(app={}){
    get(app)
}

module.exports = financial