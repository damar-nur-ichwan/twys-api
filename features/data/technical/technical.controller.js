const { get } = require('./get/technical-get.controller')
const { set } = require('./set/technical-set.controller')

function technical(app={}){
    get(app)
    set(app)
}

module.exports = technical