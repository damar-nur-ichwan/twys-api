const forgot = require('./forgot/forgot.controller')
const register = require('./register/register.controller')
const { login } = require('./login/login.controller')
const change = require('./change/change.controller')

function users(app={}){
    register(app)
    forgot(app)
    login(app)
    change(app)
}

module.exports = users