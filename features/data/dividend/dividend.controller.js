const { set } = require('./set/dividend-set.controller')

function dividend(app={}){
    set(app)
}

module.exports = dividend