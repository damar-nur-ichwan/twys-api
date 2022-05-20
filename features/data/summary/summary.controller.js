const { set } = require('./set/summary-set.controller')

function summary(app={}){
    set(app)
}

module.exports = summary