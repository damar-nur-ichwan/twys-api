const { get } = require('./get/email-get.controller')
const { set } = require('./set/email-set.controller')

function email(app={}){
    get(app)
    set(app)
    
}

module.exports = email