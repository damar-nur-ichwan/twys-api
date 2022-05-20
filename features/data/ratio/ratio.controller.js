const { set } = require('./set/ratio-set.controller')

function ratio(app={}){
    set(app)
}

module.exports = ratio