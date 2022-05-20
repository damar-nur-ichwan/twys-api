const { get } = require('./get/about-get.controller')
const { set } = require('./set/about-set.controller')

function about(app={}){
    get(app)
    set(app)
}

module.exports = about