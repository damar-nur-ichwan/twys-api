const { get } = require('./get/url-get.controller')
const { set } = require('./set/url-set.controller')

function url(app={}){
    get(app)
    set(app)
}

module.exports = url