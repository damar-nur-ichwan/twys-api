const { apply } = require('./apply/change-apply.controller')
const { verify } = require('./verify/change-verify.controller')

function change(app={}){
    apply(app)
    verify(app)
}

module.exports = change