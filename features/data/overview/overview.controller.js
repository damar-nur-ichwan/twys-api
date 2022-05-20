const { get } = require('./get/overview-get.controller')
const { set } = require('./set/overview-set.controller')

function overview(app={}){
    get(app)
    set(app)
}

module.exports = overview