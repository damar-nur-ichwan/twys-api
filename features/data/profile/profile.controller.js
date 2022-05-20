const { get } = require('./get/profile-get.controller')
const { set } = require('./set/profile-set.controller')

function profile(app={}){
    get(app)
    set(app)
}

module.exports = profile