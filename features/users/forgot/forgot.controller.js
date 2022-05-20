const { apply } = require('./apply/forgot-apply.controller')
const { verify } = require('./verify/forgot-verify.controller')

function forgot(app={}){
    apply(app)
    verify(app)
}

module.exports = forgot