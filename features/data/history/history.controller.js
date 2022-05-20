const { get } = require('./get/history-get.controller')
const { set } = require('./set/history-set.controller')

function history(app={}){
    get(app)
    set(app)
}

module.exports = history