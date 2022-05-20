const { apply } = require('./apply/register-apply.controller')
const { verify } = require('./verify/register-verify.controller')

function register(app={}){
    apply(app)
    verify(app)
}

module.exports = register